const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var Testing 
const Booking = require("../models/Booking");
// register

router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // validation

    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db

    const newUser = new User({
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    console.log(email);
    
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })


     
      .send();
      tests = email;
Booking.find({Tutor:email}, function(err,i)
{
  if(err) 
  {
    console.error(err)
  }
  if(i)
  {
    Testing = i
  }
})
      console.log(tests);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
 
  } catch (err) {
    res.json(false);
  }
});



router.get('/users/:id', function (req, res) {
  const users = Testing.filter(test => test.id === req.params.id)
  res.send({ users });
})

 
router.get('/users', function (req, res) {
  res.json({ Testing });
})




router.put('/users/:id', function (req, res) {
  const { firstName, lastName } = req.body
  const Ids = req.params.id
  console.log(Ids);
  
  Booking.updateOne({ _id: Ids }, { $set: { firstName, lastName } }, { upsert: true }, function (err, UpdatePoints) {
    if (err) console.error(err);
    if (UpdatePoints) {
      Booking.find({Tutor:tests}).exec(function (err, results) {
        if (err) {
          console.error(err);
        }
        if (results) {
          Testing = results
      
        }
      })
      
    }
  })

})

module.exports = router;