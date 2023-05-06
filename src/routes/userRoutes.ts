const expressT = require("express");
const { getUser, getUserById } = require("../controllers/UserController");

const userRouter = expressT.Router();

userRouter.route("/user").get(getUser)
userRouter.route("/user/:userId").get(getUserById);

module.exports = userRouter;