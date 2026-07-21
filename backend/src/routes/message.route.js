import express from "express";
import { protectRoute } from "../../middleware/auth.middleware.js";
import {
  getConversationsForSideBar,
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

import { upload } from "../../middleware/upload.middleware.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/conversations", protectRoute, getConversationsForSideBar);
router.get("/:id", protectRoute, getMessages);
router.get("/send/:id", protectRoute, upload.single("media"), sendMessage);

export default router;
