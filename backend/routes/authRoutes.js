const express = require('express');
const {
  registerUser,
  getAllUsers,
  getSingleUser,
  updloadUserCardImage,
} = require('../controllers/authControllers');
const router = express.Router();

router.route('/auth/register').post(registerUser);
router.route('/auth').get(getAllUsers);
router.route('/auth/:id').get(getSingleUser).patch(updloadUserCardImage);

module.exports = router;
