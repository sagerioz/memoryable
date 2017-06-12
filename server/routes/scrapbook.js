import express from 'express';
import knex from '../knex';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import User from '../models/Scrapbook';

let router = express.Router();

// function validateInput(data, otherValidations) {
//   let { errors } = otherValidations(data);
//
//   return User.query({
//     where: { email: data.email },
//     orWhere: { username: data.username }
//   }).fetch().then(user => {
//     if (user) {
//       if (user.get('username') === data.username) {
//         errors.username = 'There is user with such username';
//       }
//       if (user.get('email') === data.email) {
//         errors.email = 'There is user with such email';
//       }
//     }
//
//     return {
//       errors,
//       isValid: isEmpty(errors)
//     };
//   })
//
// }

// router.get('/:identifier', (req, res) => {
//   User.query({
//     select: [ 'username', 'email' ],
//     where: { email: req.params.identifier },
//     orWhere: { username: req.params.identifier }
//   }).fetch().then(user => {
//     res.json({ user });
//   });
// });

/* GET all entries */
router.get('/', (req, res, next) => {
  knex('scrapbook')
    .then((scrapbook) => {
      res.send(scrapbook)
    })
    .catch((error) => {
      next(error)
    })
})


/* POST one journal */
router.post('/', function(req, res, next) {
  knex('scrapbook')
    .returning(['title'])
    .insert({
      title: req.body.title
    })
    .then((journal) => {
      console.log(journal);
      res.send(journal)
    })
})



export default router;
