const express = require("express");
const {createUser, loginUserCtrl, getAllUsers, getAUser, deleteUser,updateUser} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post('/login', loginUserCtrl)

router.get('/all-users', getAllUsers)
router.get('/:id',authMiddleware, isAdmin, getAUser)
router.delete('/:id', deleteUser)
router.put('/edit-user',authMiddleware, updateUser)





module.exports = router;