import express from "express";

const router = express.Router();
import { sendReservation } from "../controllers/reservation.js";

router.post("/send", sendReservation);

export default router;
