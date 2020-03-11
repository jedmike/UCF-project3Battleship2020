const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// Matches with "/api/game"
router.route("/")
  .post(gameController.create);

// Matches with "/api/game/:id"
router
  .route("/:id")
  

module.exports = router;
