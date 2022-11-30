const express = require('express');
const userController = require('./controllers/userController');
const boxController = require('./controllers/boxController');
const router = express.Router();

/**
 * DEBUG
 */
router.get('/api', (req, res) => {
  res.send('hello world');
});


/* user */

router.post('/api/user', userController.createOrModify, );
router.get('/api/user/userid', userController.getUser);

/* box */
router.get('/api/userbox/:id', boxController.getAllBox);
router.get('/api/box/:id', boxController.findOneBox);
router.post('/api/box', boxController.createOrModify);
router.delete('/api/box/:id/delete', boxController.deleteBox);



/**
 * ERROR
 */
router.use((err, req, res, next) => {
  // ce petit middleware va capter toute les erreurs qui ne sont pas catch dans notre router
  console.trace(err);
  res.status(500).json(err.toString());
});

router.use((req, res) => {
  res.sendStatus(404);
});


module.exports = router;