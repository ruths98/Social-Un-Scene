const { Users, Thoughts } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    Users.find()
    .populate('thoughts')
      .then((users) => res.json(users))
      .catch((err) => {
        res.status(500).json(err)
        console.log(err)
      })
      
  },
  // Get a users
  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    Users.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    Users.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : user.deleteMany({ _id: { $in: users.thoughts } })
      )
      .then(() => res.json({ message: 'User and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
  Friend.create(req.body)
  .then((user) => res.json(user))
  .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
  });
},

deleteFriend(req, res) {
  Friend.findOneAndDelete({ _id: req.params.userId })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : user.deleteMany({ _id: { $in: users.thoughts } })
    )
    .then(() => res.json({ message: 'User and students deleted!' }))
    .catch((err) => res.status(500).json(err));
},

getFriends(req, res) {
  Friend.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
},

}



