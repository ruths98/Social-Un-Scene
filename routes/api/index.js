const router = require('express').Router();
//our necessary api routes
const thoughtsRoutes = require('./thoughtsRoutes')
const usersRoutes = require('./usersRoutes')

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);



module.exports = router;