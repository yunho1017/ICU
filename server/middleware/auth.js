const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const secret = process.env.JWT_SECRET || 'default_key';
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).end();
  }
  const p = new Promise(
    (resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      })
    }
  )

  const onError = (error) => {
    res.status(403).json(error.message);
  }

  p.then((decoded) => {
    req.decoded = decoded;
    next();
    }).catch(onError)
}

module.exports = authMiddleware;