import express from "express";
import controller from "./chat.controller";

const router = express.Router();

router.post('/', controller.chat);

export default router;