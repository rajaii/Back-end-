const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userDb = require('./authModel')
const authenticate = require('../auth/authenticate-middleware');


const router = express.Router();

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    userDb.create(user)
    .then(u => {
        res.status(201).json({message: `Welcome ${user.username}`})
    })
    .catch(err => {
      console.log(err);
        res.status(500).json({error: err})
    })

})

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    userDb.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({message: `Hi ${user.username}`, token})
      } else {
        res.status(401).json({message: 'Easy there, you cannot pass'})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  
  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    }
    const secret = process.env.SECRET || "AliDaShizzyManizzy"
  const options = {
    expiresIn: '1h'
  }
  return jwt.sign(payload, secret, options);
  };


router.get("/events", authenticate, (req, res) => {
    userDb.fetch()
    .then(events => {
      res.send(events)
    }) .catch( error => res.send(error));
});


module.exports = router;