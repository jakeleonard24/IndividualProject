require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, massive = require('massive')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, cors = require('cors')
, axios = require('axios')
, multer = require('multer')
, AWS = require('aws-sdk')
, upload = multer({dest: 'uploads/'})



const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// massive connection
massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    // databse stuff
    

        db.get_user([profile.identities[0].user_id]).then( user => {
            if (user[0]) {
                done(null, user[0])
            } else {
                if(profile.nickname){
                db.create_user([
                    profile.emails[0].value,
                    profile.nickname,
                    profile.password,
                    profile.picture,
                    profile.identities[0].user_id])
                    .then( user => {
                        done(null, user[0])
                    })}
                    else {
                        db.create_user([
                            profile.emails[0].value,
                            profile.emails[0].value,
                            profile.password,
                            profile.identities[0].user_id])
                            .then( user => {
                                done(null, user[0])
                            })
                    }
            }})
      }))

     passport.serializeUser(function(user, done) {
        
        done(null, user);
    })
      passport.deserializeUser(( userId, done) => {
        
        app.get('db').current_user([userId.id]).then(user => {
            
                done(null, user[0])
        })
    })

    const storage = multer.diskStorage({
       
        filename(req, file, cb) {
            cb(null, `${new Date()}-${file.originalname}`)
        },
    });

    // const profile = multer({storage});
    var type = upload.single('file')

    app.post('/profile', type, (req, res, next) => {
            console.log(req.body, 'Body')
            console.log(req.file)
            res.json(req.file)
            
            
    });

    app.get('/auth', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0',{
        successRedirect: 'http://localhost:3000/#/blog',
        failureRedirect: '/auth'
      }))
      app.get('/auth/logout', (req,res) => {
        req.logOut();
        res.redirect(302, `https:${process.env.AUTH_DOMAIN}/v2/logout?returnTo=http://localhost:3000/#/blog`)
    })

    app.get('/api/blogs', (req,res) => {
        req.app.get('db').get_all_blogs().then(blogs =>{
            res.status(200).send(blogs);
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/comments', (req, res) => {
        req.app.get('db').get_all_comments().then(comments => {
            res.status(200).send(comments)
        }).catch((err) => {console.log})
    })

    app.get('/api/myblogs', (req,res) => {
        req.app.get('db').get_join().then(blogs =>{
            res.status(200).send(blogs);
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/userprofile/:id', (req, res) =>{
        console.log(req.params)
        let {id} = req.params;
        req.app.get('db').get_user_profile([id]).then(user => {
            res.status(200).send(user)
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/news', (req, res) => {
        axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=type+1+diabetes&count=9&mkt=en-us',
        {'headers': {'Ocp-Apim-Subscription-Key': process.env.BING_KEY}})
        .then(response => {
            res.send(response.data)
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/news2', (req, res) => {
        axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=kids+type+1+diabetes&count=15&mkt=en-us',
        {'headers': {'Ocp-Apim-Subscription-Key': process.env.BING_KEY}})
        .then(response => {
            res.send(response.data)
        }).catch((err) => {console.log(err)})
    })

    app.get('/api/youtube', (req, res) =>{
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=type+1+diabetes&key=' + process.env.API_KEY).then(response => {
            res.send(response.data)
        }).catch((err) => {console.log(err)})
    })

    app.post('/api/newblog', (req, res) => {
        let {userId, title, blog, date, image, username} = req.body;
        req.app.get('db').add_blog([userId, title, blog, date, image, username]).then(blogs => {
            res.status(200).json(req.body)
        })
        
    })

    app.post('/api/newcomment', (req,res) => {
        let{username, email, blogId, comment, image} = req.body;
        req.app.get('db').add_comment([username, email, blogId, comment, image]).then(comments => {
            res.status(200).json(req.body)
        })
    })

    app.post('/api/delete', (req, res) => {
        console.log('endpoint hit', req.body)

        let{blogId} = req.body;
        req.app.get('db').delete_blog([blogId]).then(blogs =>{
            res.status(200).json(req.body)
        })
    })

    app.get('/api/user', (req, res)=> {
        
        res.send(req.user)
    })

    app.post('/api/updateuser', (req, res) => {
        console.log('update user hit', req.body)
        let{username, email, image, aboutMe, userId} = req.body;
        req.app.get('db').update_user([username, email, image, aboutMe, userId]).then(users => {
            res.status(200).json(req.body)
        })
    })

    

const port = 3333;

app.listen(port, () => console.log(`listening on port ${port}`));