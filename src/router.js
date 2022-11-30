const express = require('express');
const userController = require('./controllers/userController');
const boxController = require('./controllers/boxController');
const router = express.Router();

/**
 * DEBUG
 */
router.get('/', (req, res) => {
  res.send("ça fonctionne");
});


/* user */

router.post('/user', userController.createOrModify, );
router.get('/user/userid', userController.getUser);

/* box */
router.get('/userbox/:id', boxController.getAllBox);
router.get('/box/:id', boxController.findOneBox);
router.post('/box', boxController.createOrModify);
router.delete('/box/:id/delete', boxController.deleteBox);



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