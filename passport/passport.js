var LocalStrategy   = require('passport-local').Strategy;
var Traveler = require('../models/Traveler');
var Driver = require('../models/Driver')
var bCrypt = require('bcrypt-nodejs');


module.exports = function(passport){

    passport.serializeUser(function(user, done) {
      var key = {
        id: user._id,
        type: user.userType
      }
      done(null, key);
    });

    passport.deserializeUser(function(key, done) {
        if (key.type == "traveler") {
            Traveler.findById(key.id, function(err, user) {
                console.log('deserializing user:',user);
                done(err, user);
            });
        }
        if (key.type == "driver") {
            Driver.findById(key.id, function(err, user) {
                console.log('deserializing user:',user);
                done(err, user);
            });
        }

    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    passport.use('TravelerLogin', new LocalStrategy({
            usernameField: "email",
            passportField: "password",
            passReqToCallback : true
        },
        function(req, email, password, done) { 
            // check in mongo if a user with username exists or not
            Traveler.findOne({ 'email' :  email }, 
                function(err, traveler) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log the error and redirect back
                    if (!traveler){
                        console.log('Email Not Found');
                        return done(null, false, req.flash('message', 'User Not found.'));                 
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(traveler, password)){
                        console.log('Invalid Password');
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, traveler);
                }
            );

        })
    );


    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }


    passport.use('TravelerSignup', new LocalStrategy({
            usernameField: "email",
            passportField: "password",
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            //console.log(req.param);

            findOrCreateUser = function(){
                // find a user in Mongo with provided email
                Traveler.findOne({ 'email' :  email }, function(err, traveler) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (traveler) {
                        console.log('Email already exists');
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newTraveler = new Traveler();

                        // set the Traveler's local credentials
                        newTraveler.email = email;
                        newTraveler.password = createHash(password);
                        newTraveler.mobile = req.param('mobile');
                        newTraveler.name = req.param('firstName') + ' ' + req.param('lastName');
                        newTraveler.userType = "traveler";

                        // save the Traveler
                        newTraveler.save(function(err) {
                            if (err){
                                console.log('Error in Saving Traveler: '+err);  
                                throw err;  
                            }
                            console.log('Registration succesful');    
                            return done(null, newTraveler);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

    passport.use('DriverLogin', new LocalStrategy({
            usernameField: "email",
            passportField: "password",
            passReqToCallback : true
        },
        function(req, email, password, done) { 
            // check in mongo if a user with username exists or not
            Driver.findOne({ 'email' :  email }, 
                function(err, driver) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log the error and redirect back
                    if (!driver){
                        console.log('Email Not Found');
                        return done(null, false, req.flash('message', 'User Not found.'));                 
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(driver, password)){
                        console.log('Invalid Password');
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, driver);
                }
            );

        })
    );


    passport.use('DriverSignup', new LocalStrategy({
            usernameField: "email",
            passportField: "password",
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            //console.log(req.param);

            findOrCreateUser = function(){
                // find a user in Mongo with provided email
                Driver.findOne({ 'email' :  email }, function(err, driver) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (driver) {
                        console.log('Email already exists');
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newDriver = new Driver();

                        // set the Driver's local credentials
                        newDriver.email = email;
                        newDriver.password = createHash(password);
                        newDriver.mobile = req.param('mobile');
                        newDriver.name = req.param('firstName') + ' ' + req.param('lastName');
                        newDriver.userType = "driver";

                        // save the Driver
                        newDriver.save(function(err) {
                            if (err){
                                console.log('Error in Saving Driver: '+err);  
                                throw err;  
                            }
                            console.log('Registration succesful');    
                            return done(null, newDriver);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

}