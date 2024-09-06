const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts);

// GET a single thought by ID
router.route('/:thoughtId').get(getSingleThought);

// POST a new thought
router.route('/').post(createThought);

// PUT to update a thought by ID
router.route('/:thoughtId').put(updateThought);

// DELETE a thought by ID
router.route('/:thoughtId').delete(deleteThought);

// POST to add a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE to remove a reaction by reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
