// routes/accountHeadRoutes.js
import express from "express";
import {
    createAccountHead,
    getAccountHeads,
    getAccountHeadById,
    updateAccountHead,
    deleteAccountHead
} from "../controllers/accountHead.js";

const router = express.Router();

// Routes for Account Head
router.post("/", createAccountHead);
router.get("/", getAccountHeads);
router.get("/:id", getAccountHeadById);
router.put("/:id", updateAccountHead);
router.delete("/:id", deleteAccountHead);

export default router;
