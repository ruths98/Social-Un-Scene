const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createCourse);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSinglesingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;