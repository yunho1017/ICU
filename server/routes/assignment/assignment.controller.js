const Database = require('../../util/Database');
const uuid = require('uuid/v4');

exports.createAssignment = (req, res) => {
  if(!userInfo.isAdmin) {
    return res.status(403).end();
  }

  const { title, 
          detail,
          start_date: startDate, 
          end_date: endDate,
          subject_id:subjectId } = req.body;
  const assignmentId = uuid();
  const userInfo = req.decoded;
  let status = 500;
  
  Database.query('select * from admin where id = ?', [userInfo.id])
  .then(result => {
    if(results.length< 0) {
      return res.status(500).end();
    }

    return Database.query('insert into assignment values (?,?,?,?,?,?,?,?)', assignmentId, subjectId, userInfo.id, result.color_code, title, detail, startDate, endDate)
  })
  .then(result => {
    if(result.affectedRows !== 1) {
      return res.status(500).end();
    }

    return res.status(200).end();
  })
  .catch(err => {
    return res.status(500).end();
  })
};

exports.readAssignmentByStudent = (req, res) => {
  if(userInfo.isAdmin) {
    return res.status(403).end();
  }

  const userInfo = req.decoded;
  const { subjectId } = req.body;
  let status = 500;
  let response = {
    assignments: []
  };

  Database.query('select * from assigment where subject_id = ?', [subjectId])
  .then(async results => {
    if(results.length< 0) {
      return res.status(500).end();
    }

    let p = results.map(result => {
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

    await Promise.all(p);
    return res.status(200).json(response);
  })
  .catch(err => {
    return res.status(500).end();
  })
};

exports.readAssignmentByAdmin = (req, res) => {
  if(!userInfo.isAdmin) {
    return res.status(403).end();
  }

  const userInfo = req.decoded;
  let status = 500;
  let response = {
    assignments: []
  };

  Database.query('select * from assigment where auther = ?', [userInfo.id])
  .then(async results => {
    if(results.length< 0) {
      return res.status(500).end();
    }

    let p = results.map(result => {
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

    await Promise.all(p);
    return res.status(200).json(response);
  })
  .catch(err => {
    return res.status(500).end();
  })
};