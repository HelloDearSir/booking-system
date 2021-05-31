const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongooes = require('mongoose');
mongooes.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const app = express();
var bcrypt = require('bcrypt');
const { Timestamp } = require('bson');
salt_work_factor = 10;
require("dotenv").config();
const Booking = require("./models/Booking");

const NewUserSchema = new mongooes.Schema({
  
  email:{type:String},
password : {type:String},
firstName : String,
lastName: String

});

const NewMovies = new mongooes.Schema({
  MovieTitle: { type: String },
  Description: { type: String }
})

var tests;
const Movies = mongooes.model("myMovies", NewMovies);
module.exports = Movies;




NewUserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(salt_work_factor, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

NewUserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(undefined, isMatch);
  });
};

const User = mongooes.model("myusers", NewUserSchema);
module.exports = User;

app.use(cors());

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'https://gittrying.herokuapp.com',
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header(
  "Access-Control-Allow-Headers",
  "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
);
res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
next();
});


app.get('/home', function (req, res) {
  console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Books : ', JSON.stringify(books));
  res.end(JSON.stringify(books));
});

var temp = 4;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/weath', function (req, res) {
  res.send({ temp });
})

 


const Blogs  = new mongooes.Schema({
  title: String,
  body: String
})

const newBlog = mongooes.model('newBlogs', Blogs);
module.exports = newBlog;
app.post('/save', function (req, res) {
  console.log(req.body)
  const data = req.body;
  const newBlogs =  newBlog(data);
  newBlogs.save((err) => {
  if(err) console.error(err);
 
 
    else  { 
      newBlog.find({}).exec(function (err, results) {
        if (err) {
          console.error(err);
        }
        if (results) {
          tests = results
      
        }
      })
      

res.json({ msg: "we got the daata"})


    }
    
  })
 
  // var title = req.body.title;
  // var body = req.body.body;
  // var NewBook = new newUsers();

  // NewBook.title = title;
  // NewBook.body = body;
 

  // NewBook.save(function (err, saveduser) {
  //   if (err) {
  //     console.log(err);
  //   }
    
  // })


  // console.log(FirstName);
});

var newtests;

User.find({}, function(err,newUsers)
{
  if(err) console.error(err);
  if(newUsers)
  {
    newtests = newUsers;
  }
})

 app.get('/nusers', function (res,req) 
 {
  res.send({ newtests });
 })

app.post("/createMovies", function (req, res) {
  var MovieTitles = req.body.firstName;
  var Description = req.body.lastName;
  var tests = req.body.email;
  var location = req.body.location;
  var tutor = req.body.tutor
  var time = req.body.time;
 
  var NewMovie = new Booking();

  NewMovie.firstName = MovieTitles;
  NewMovie.lastName = Description;
  NewMovie.email = tests; 
  NewMovie.Location = location;
  NewMovie.Tutor = tutor;
  NewMovie.Time = time;
 

  NewMovie.save(function (err, saveduser) {
    if (err) {
      console.log(err);
    }
    if(saveduser)
    {
      Booking.find({}).exec(function (err, results) {
        if (err) {
          console.error(err);
        }
        if (results) {
          tests = results
      
        }
      })
    }
    })


  console.log(MovieTitles, Description);
})
var Testing
Booking.find({}).exec(function (err, results) {
  if (err) {
    console.error(err);
  }
  if (results) {
    Testing = results

  }
})


newBlog.find({}).exec(function (err, results) {
  if (err) {
    console.error(err);
  }
  if (results) {
    tests = results

  }
})


app.get('/todo', function(req,res){
  res.send({tests})
})

const Port = process.env.PORT || 50000
//start your server on port 3001
app.listen(Port, () => {
  console.log('Server Listening on port 3001');
});

//set up 
app.use(express.json());
app.use(cookieParser());
app.use("/auth", require("./routes/userRouter"));

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'))
}
