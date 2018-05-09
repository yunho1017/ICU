const Database = require('../../util/Database');
const uuid = require('uuid/v4');

exports.createAssignment = (req, res) => {
  const { title, 
          detail,
          startDate, 
          endDate,
          subjectId } = req.body;
          
  const assignmentId = uuid();
  const userInfo = req.decoded;
  let status = 500;

  if(!userInfo.isAdmin) {
    return res.status(403).end();
  }

  Database.query('select * from admin where id = ?', [userInfo.id])
  .then(result => {
    if(result.length< 0) {
      return res.status(500).end();
    }

    return Database.query('insert into assignment values (?, ?, ?, ?, ?, ?, ?, ?)',[assignmentId, title, detail, startDate, endDate, userInfo.id, subjectId, result[0].color_code])
  })
  .then(result => {
    if(result.affectedRows !== 1) {
      return res.status(500).end();
    }

    return res.status(201).end();
  })
  .catch(err => {
    return res.status(500).end();
  })
};

exports.readAssignment = (req, res) => {
  const userInfo = req.decoded;
  const { subjectId, month } = req.query;
  let status = 500;
  let response = {
    assignments: []
   };

  if(userInfo.isAdmin) {
    Database.query('select * from assignment where auther = ?', [userInfo.id])
      .then(results => {
      if(results.length< 0) {
        return res.status(500).end();
      }

      results.map(result => {
        let assignment = {
          key: result.assignment_id,
          subject: result.subject_id,
          auther: result.auther,
          colorCode: result.color_code,
          title: result.title,
          detail: result.detail,
          startDate: result.start_date,
          endDate: result.end_date
        }
        return response.assignments.push(assignment);
      });

      return res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).end();
    }) 
  }

  Database.query('select * from assignment where subject_id = ?', [subjectId])
  .then(results => {
    if(results.length< 0) {
      return res.status(500).end();
    }

    let assignments = results.filter(assignment => {
      const startDate = new Date(assignment.start_date);
      const endDate = new Date(assignment.end_date);

      if(startDate.getMonth() + 1 == month || endDate.getMonth() + 1 == month) return true;
    });

    assignments.map(result => {
      let assignment = {
        key: result.assignment_id,
        subject: result.subject_id,
        auther: result.auther,
        colorCode: result.color_code,
        title: result.title,
        detail: result.detail,
        startDate: result.start_date,
        endDate: result.end_date
      }
      return response.assignments.push(assignment);
    });

    return res.status(200).json(response);
  })
  .catch(err => {
    return res.status(500).end();
  })
};