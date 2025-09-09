import express from "express";
import {
  getIfsc
} from "../controllers/ifscController.js";

const router = express.Router();

router.get('/ifsc/:ifsc', getIfsc);

export default router;
