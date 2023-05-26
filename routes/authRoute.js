const express = require("express");
const {
  createUser,
  loginUserCtrl,
  handleRefreshToken,
  logout,
  getAllUsers,
  getAUser,
  deleteUser,
  updateUser,
  blockedUser,
  unblockedUser,
  updatePassword
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.put('/update-password', authMiddleware, updatePassword)
router.post("/login", loginUserCtrl);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout)

router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);

router.put("/block-user/:id", authMiddleware, isAdmin, blockedUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockedUser);

module.exports = router;
