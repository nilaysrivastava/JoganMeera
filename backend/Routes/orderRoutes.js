import express from "express";
import {
  placeOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getAllOrders);
router.get("/:id", getSingleOrder);
router.put("/:id", updateOrder);

export default router;
