const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller');

// GET all thoughts
router.get('/', thoughtController.getThoughts);

// GET a single thought by id
router.get('/:thoughtId', thoughtController.getSingleThought);

// POST a new thought
router.post('/', thoughtController.createThought);

// PUT update a thought
router.put('/:thoughtId', thoughtController.updateThought);

// DELETE a thought
router.delete('/:thoughtId', thoughtController.deleteThought);

// POST add a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.addReaction);

// DELETE remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;