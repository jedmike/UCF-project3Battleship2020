const router = require("express").Router();
const bookRoutes = require("./game");

// Book routes
router.use("/game", gameRoutes);

module.exports = router;
