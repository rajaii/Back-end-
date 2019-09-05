const jwt = require('jsonwebtoken');


//may need to do some more configuring of process.env for secret, see lecture stuff for lesson 3ish sprint 3ish

module.exports = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    jwt.verify(tokenHeader, process.env.SECRET , (err, decodedToken) => {
      if (err) {
        res.status(401).json({message: "bad auth"})
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
  res.status(401).json({ you: 'shall not pass!' });
  }
};
