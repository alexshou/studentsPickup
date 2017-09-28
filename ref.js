// use two LocalStrategies, registered under user and sponsor names

      // add other strategies for more authentication flexibility
  passport.use('user-local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.findOne({
        email: email
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, {
            message: 'This email is not registered.'
          });
        }
        if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'This password is not correct.'
          });
        }
        return done(null, user);
      });
    }
  ));

    // add other strategies for more authentication flexibility
    passport.use('sponsor-local', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password' // this is the virtual field on the model
        },
        function(username, password, done) {
            Sponsor.findOne({
                'primaryContact.username': username
            }, function(err, sponsor) {
                if (err) return done(err);

                if (!sponsor) {
                    return done(null, false, {
                        message: 'This email/username is not registered.'
                    });
                }
                if (!sponsor.authenticate(password)) {
                    return done(null, false, {
                        message: 'This password is not correct.'
                    });
                }
                return done(null, sponsor);
            });
        }
    ));




// one url process 2 routes example

passport.authenticate('TravelerSignup', {
    successRedirect: '/home',
    failureRedirect: '/mainPage',
    failureFlash : true  
})


app.post('/passengerSignup', (req, res) => {
    if( req.body.user_type === "driver" ){
        return passport.authenticate('TravelerSignup', {
            successRedirect: '/home',
            failureRedirect: '/mainPage',
            failureFlash : true  
        });
    }
    else{

    }
});





// create table ref
var loadTravelers = function (data){
    var articleId;
    var articleTitle;
    var articleLink;
    var saveBtn;

    for (var i = 0; i < data.length; i++) {
        articleId = data[i]._id;
        articleTitle = data[i].title;
        articleLink = data[i].link;

        var articleTitleTd = $("<tr>");
        var saveBtn = $("<button>Save</button>");
        articleTitleTd.addClass("articleTitleStyle");
        saveBtn.addClass("btn btn-default btn-info saveBtnStyle");
        saveBtn.attr('id', articleId);
        console.log(articleLink);

        articleTitleTd.html("<a href=" + articleLink + ">" + articleTitle + "</a>");
        articleTitleTd.append(saveBtn);

        $("#displayArticles").append(articleTitleTd);
    };
};


$.getJSON("/passengerData", function(data) {
    console.log(data);
});
