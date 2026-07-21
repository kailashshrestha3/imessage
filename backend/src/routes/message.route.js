import express from "express";
import { protecteRoute } from "../middleware/auth.middleware.js";
import { getConversationsForSideBar, getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

import { upload } from "../../middleware/upload.middleware.js";

const router = express.Router();

router.get("/users", protecteRoute, getUsersForSidebar)
router.get("/conversations", protecteRoute, getConversationsForSideBar);
router.get("/:id", protecteRoute, getMessages);
router.get("/send/:id", protecteRoute, upload.single("media"), sendMessage);

export default router;