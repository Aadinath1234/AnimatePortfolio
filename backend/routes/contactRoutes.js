import express from "express";
import { handleContactForm } from "../controller/contactController.js";

const router = express.Router();

router.post("/contact", handleContactForm);

export default router;
