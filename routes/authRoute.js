const express = require ("express");
const {createUser, loginUserctrl, getallUser} = require ("../controller/userctrl");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserctrl);
router.get('/all-users', getallUser);

module.exports = router;