const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 50000;
const dotenv = require('dotenv');
app.use(bodyParser.json());
app.use(cors());
var nodeoutlook = require('nodejs-nodemailer-outlook');
 const authEmail = "";
 const authPassword = "";
 const fromEmail = "";
 const ToEmail = "";
 const WebAddress = "";
 async function Verifaction()
 {
   await nodeoutlook.sendEmail({
     auth:{
       user: authEmail,
       pass:authPassword
     },     
     from: fromEmail,
     to:ToEmail,
     subject:'validate',
     html: 'To  ' + ToEmail + '</br>You have completed the task </br>'   
   })
 }
//mongoose
mongoose.connect("mongodb+srv://Jon:Password@cluster0.mipjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true,useFindAndModify:false});

//data schema and model
const movieSchema = {
    title: String,
    genre: String,
    year: String
}

const Movie = mongoose.model("Movie", movieSchema);

const TodoSchema = {
    text: String
}

const todos = mongoose.model("todos", TodoSchema); 



//API routes
app.get('/movies', function(req, res) {
    Movie.find().then(movies => res.json(movies));
})

//add movie
app.post('/newmovie', function(req, res) {
    const title = req.body.title;
    const genre = req.body.genre;
    const year = req.body.year;

    const newMovie = new Movie({
        title,
        genre,
        year
    });

    newMovie.save();

});

app.delete('/delete/:id', function(req, res) {
    const id = req.params.id;
    Movie.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("movie deleted");
        } else {
            console.log(err);
        }
    })
});


app.delete('/deleting/:id', function(req, res) {
    const id = req.params.id;
    todos.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("movie deleted");
            Verifaction();
        } else {
            console.log(err);
        }
    })
}); 



var test = "hello"
app.get("/Todos", function(req, res) {
    todos.find().then(text => res.json(text));
})

app.post("/newtodo", function(req,res) {
    const text = req.body.text; 

    const newTodo = new todos({
        text
    });
    newTodo.save();
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, function() {
    console.log("express is running");
})

 