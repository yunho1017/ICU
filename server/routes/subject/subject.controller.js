const Database = require('../../util/Database');
const uuid = require('uuid/v4');

exports.createSubject = (req, res) => {
  if(!userInfo.isAdmin) {
    return res.status(403).end();
  }

  const { name, targets } = req.body;
  const subjectId = uuid();
  const userInfo = req.decoded;
  let status = 500;
  

  Database.query('insert into subject value(?, ?)', [subjectId, name])
    .then(result => {
      if(result.affectedRows !== 1) {
        return res.status(500).end();
      }

      return Database.query('insert into admin_subject value(?,?)', [userInfo.id, subjectId]);
    })
    .then(result => {
      if(result.affectedRows !== 1) {
        return res.status(500).end();
      }

      targets.map(async target => {
        let result = await Database.query('insert into student_subject value(?,?,?)', [subjectId, target.grade, target.class]);
        
        if(result.affectedRows !== 1) return res.status(500).end();
      }); 

      return res.status(201).end();
    })
    .catch(err => {
      return res.status(500).end();
    })
};

exports.readSubject = (req, res) => {
  if(userInfo.isAdmin) {
    return res.status(403).end();
  }
  
  const userInfo = req.decoded;
  let status = 500;
  let response = {
    subjects: []
  };


  Database.query('select * from student_subject inner join subject on student_subject.subject_id = subject.subject_id where grade = ? and class = ?' , [userInfo.grade, userInfo.class])
    .then(async results => {
      if(results.length< 0) {
        return res.status(500).end();
      }

      let p = results.map(result => {
        return response.subjects.push(result.name);
      });

      await Promise.all(p);
      return res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    })
};