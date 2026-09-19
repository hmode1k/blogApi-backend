const { Router } = require("express");
const authController = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/signup", authController.signUp); // sign up user
// authRouter.post("/login"); // log user in
// authRouter.get("logout"); // log user out

module.exports = { authRouter };
