const express = require("express");
const { createUser, getRandomUser, getUserName, getAllUser, getUsersByAge } = require("../controller/userController");

const router = express.Router();

router.post("/add-user", createUser);
router.get("/random-user",getRandomUser)
router.post("/find-user-by-name",getUserName)
router.get("/get-all-users",getAllUser)
router.post("/get-user-by-age",getUsersByAge)
module.exports = router;