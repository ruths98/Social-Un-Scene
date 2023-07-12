const { Users, Thoughts, Reactions } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  async createThought(req, res) {
    try {
      //use the text of the body to populate the thought document
      const dbThoughtData = await Thoughts.create(req.body);
      //find the user with the id in the params, push the created thought by finding it via id
      const dbUserData = await Users.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      )
      if (!dbUserData) {
        res.json({
          message: 'No user with that id!'
        })
      }

      else {
        res.json(dbThoughtData)
      }

    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    };
  },
  // Delete a thought
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  async addReaction(req, res) {
    
      try {
        //find the user with the id in the params, push the created thought by finding it via id
        const dbThoughtData = await Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions:{
            thoughtId: req.params.thoughtId,
            ...req.body
          } } },
          { new: true }
        )
        if (!dbThoughtData) {
          res.json({
            message: 'No thought found!'
          })
        }
  
        else {
          res.json(dbThoughtData)
        }
  
      }
      catch (err) {
        console.log(err);
        return res.status(500).json(err);
      };
    
  },
  // Delete a reaction
  deleteReaction(req, res) {
    Reactions.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : Reactions.deleteMany({ _id: { $in: thoughts.reactions } })
      )
      .then(() => res.json({ message: 'thoughts and reactions deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};

