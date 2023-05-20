const express = require("express");
const {createUser, loginUserCtrl, getAllUsers, getAUser, deleteUser,updateUser} = require("../controller/userController");
const router = express.Router();

router.post("/register", createUser);
router.post('/login', loginUserCtrl)

router.get('/all-users', getAllUsers)
router.get('/:id', getAUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)





module.exports = router;