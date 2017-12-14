'use strict';
const apiRouter = require('express').Router();
const db = require('../db/models');
//const Student = require('../db/models/Student');
//const Campus = require('../db/models/Campus');

const Student = db.model('student');
const Campus = db.model('campus');

// GET /api/students/
apiRouter.get('/', (req, res, next) => {
  Student.findAll({include: [Campus]})
  .then(students => res.send(students))
  .catch(next);
});

// GET /api/students/:id
apiRouter.get('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: {
        $eq: req.params.id
      }
    },
    include: [Campus]
  })
    .then(student => res.send(student))
    .catch(next);
});

// POST /api/students
apiRouter.post('/', (req, res, next) => {
  console.log(req.body);
  Student.create(req.body)
  .then(student => {
    res.send(student);
  })
  .catch(next);
});

// PUT /api/students/:id
apiRouter.put('/:id', (req, res, next) => {
  Student.update(req.body, {
    where: {
      id: {
        $eq: req.params.id,
      }
    },
    returning: true,
  })
  .spread((count, [updatedStudent]) => {
    if (count > 0) {
      res.status(200); // 200 OK
      res.send(updatedStudent);
    } else {
      res.status(204); // 204 No Content
      res.send('204 No Content');
    }
  })
  .catch(next);
});

// DELETE /api/students/:id
apiRouter.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: {
        $eq: req.params.id
      }
    }
  })
  .then(result => {
    if (result === 1) {
      res.status(200); // 200 OK
      res.send('200 OK');
    } else {
      res.status(204); // 204 No Content
      res.send('204 No Content');
    }
  })
  .catch(next);
});

module.exports = apiRouter;
