const Database = require('../../util/Database');
const uuid = require('uuid/v4');

exports.createSubject = (req, res) => {
  const { name } = req.body;
  targets = [{
    grade: 3,
    class: 1
  },{
    grade: 3,
    class: 2
  }]
  const subjectId = uuid();
  const userInfo = req.decoded;
  let status = 500;
  
  if(!userInfo.isAdmin) {
    return res.status(403).end();
  }

  Database.query('insert into subject values (?, ?)', [subjectId, name])
    .then(result => {
      if(result.affectedRows !== 1) {
        return res.status(500).end();
      }

      return Database.query('insert into admin_subject values (?,?)', [userInfo.id, subjectId]);
    })
    .then(result => {
      if(result.affectedRows !== 1) {
        return res.status(500).end();
      }

      targets.map(async target => {
        let result = await Database.query('insert into student_subject values (?,?,?,?)', [subjectId,name, target.grade, target.class]);
        
        if(result.affectedRows !== 1) return res.status(500).end();
      }); 

      return res.status(201).end();
    })
    .catch(err => {
      return res.status(500).end();
    })
};

exports.readSubject = (req, res) => {
  const userInfo = req.decoded;
  let status = 500;
  let response = {
    subjects: []
  };

  if(userInfo.isAdmin) {
    Database.query('select * from admin_subject inner join subject on admin_subject.subject_id = subject.subject_id where admin_id = ?' , [userInfo.id])
    .then(results => {
      if(results.length< 0) {
        return res.status(500).end();
      }

      let p = results.map(result => {
        let subject = {
          id: result.subject_id,
          name: result.name,
        }
        return response.subjects.push(subject);
      });

      return res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    })
  }

  Database.query('select * from student_subject inner join subject on student_subject.subject_id = subject.subject_id where grade = ? and class = ?' , [userInfo.grade, userInfo.class])
    .then(results => {
      if(results.length< 0) {
        return res.status(500).end();
      }

      let p = results.map(result => {
        let subject = {
          id: result.subject_id,
          name: result.name,
        }
        return response.subjects.push(subject);
      });

      return res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    })

};