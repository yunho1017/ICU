const jwt = require('jsonwebtoken');
const Database = require('../../util/Database');
const secret = process.env.JWT_SECRET || 'default_key';

exports.createUser = (req, res) => {
  const { id, pwd, name, grade, class: _class } = req.body;
  const refreshToken = generateRefreshToken();
  let status = 500;

  Database.query('insert into user values (?, ?, ?, ?, ?, ?)', [id, pwd, name, grade, _class, refreshToken])
    .then(result => {
      if(result.affectedRows !== 1)  {
        return res.status(500).end();
      }

      return res.status(201).end();
    })
    .catch(err => {
      return res.status(500).end();
    })
};

exports.createAdmin = (req, res) => {
  const { serialCode, id, pwd, name, colorCode } = req.body;
  const refreshToken = generateRefreshToken();
  let status = 500;

  Database.query('select * from admin where serial_code = ?', [serialCode])
  .then(result => {
    if(result.length !== 1) {
      return res.status(204).end();
    }
    
    return Database.query('update admin set id = ?, pwd = ?, name = ?, color_code = ?, refresh_token = ?  where serial_code = ?', [id, pwd, name, colorCode, refreshToken, serialCode])
  })
  .then(result => {
    if(result.affectedRows !== 1){
      return res.status(500).end();
    } 
    
    return res.status(201).end();
  })
  .catch(err => {
    return res.status(500).end();
  })
};

exports.signin = (req, res) => {
  const { id, pwd } = req.body;
  const jwtOption = {
    algorithm : 'HS256',
    expiresIn : 60 * 60 * 24 * 7,
  }
  let status = 500;
  let payload = { };
  let response = { };

  Database.query('select * from user where id = ? and pwd = ? ', [id, pwd])
    .then(result => {
      if(result.length !== 1) {
        return res.status(204).end();
      }
      
      payload.id = id;
      payload.grade = result[0].grade;
      payload.class = result[0].class;
      payload.isAdmin = false;
      response.refreshToken = result[0].refresh_token;

      return new Promise((resolve, reject) => {
        jwt.sign( payload, secret, jwtOption, (err, token) => {
          if (err) reject(err);
          resolve(token);
        })
      })
    })
    .then(token => {
      response.token = token;
      res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    })
};

exports.adminSignin = (req, res) => {
  const { id, pwd } = req.body;
  const jwtOption = {
    algorithm : 'HS256',
    expiresIn : 60 * 60 * 24 * 7,
  }
  let status = 500;
  let payload = { };
  let response = { };

  Database.query('select * from admin where id = ? and pwd = ? ', [id, pwd])
    .then(result => {
      if(result.length !== 1) {
        return res.status(204).end();
      }

      payload.id = id;
      payload.isAdmin = true;
      response.refreshToken = result[0].refresh_token;

      return new Promise((resolve, reject) => {
        jwt.sign( payload, secret, jwtOption, (err, token) => {
          if (err) reject(err);
          resolve(token);
        })
      });
    })
    .then(token => {
      response.token = token;
      console.log(response);
      
      res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    })
};

// exports.checkId = (req, res) => {
//   const { id } = req.query;
//   let status;

//   Database.query('select * from user where id = ?', [id])
//     .then(result => {
//       if(result.length === 1) {
//         return res.status(409).end();
//       } else {
//         return res.status(200).end();
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).end();
//     })
// };

function generateRefreshToken(){
  return new Date().getTime().toString() + Math.floor(Math.random()*1000000);
}