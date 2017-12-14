'use strict';
const apiRouter = require('express').Router();
const db = require('../db/models');
// const Student = require('../db/Models/Student');
// const Campus = require('../db/models/Campus');
const Student = db.model('student');
const Campus = db.model('campus');

// GET /api/campuses/
apiRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

// GET /api/campuses/:id
apiRouter.get('/:id', (req, res, next) => {
  Campus.findOne({ where: { id: { $eq: req.params.id } } })
    .then(campus => res.send(campus))
    .catch(next);
});

// GET /api/campuses/:id/students
apiRouter.get('/:id/students', (req, res, next) => {
  Student.findAll({
    where: {
      campusId: {
        $eq: req.params.id
      }
    },
    include: [Campus]
   })
    .then(students => res.send(students))
    .catch(next);
});

// POST /api/campuses
apiRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => {
      res.send(campus);
    })
    .catch(next);
});

// PUT /api/campuses/:id
apiRouter.put('/:id', (req, res, next) => {
  Campus.update(req.body, {
    where: {
      id: {
        $eq: req.params.id
      }
    },
    returning: true,
  })
  .spread((count, [updatedCampus]) => {
    if (count > 0) {
      res.status(200); // 200 OK
      res.send(updatedCampus);
    } else {
      res.status(204); // 204 No Content
      res.send('204 No Content');
    }
  }).catch(next);
});

// DELETE /api/campuses/:id
apiRouter.delete('/:id', (req, res, next) => {
  Campus.destroy({
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
  }).catch(next);
});

module.exports = apiRouter;
