import express from "express";

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/order.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router;
