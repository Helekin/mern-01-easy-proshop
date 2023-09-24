import asynHandler from "../middleware/asyncHandler.js";

import Order from "../models/order.js";

// @desc   Create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asynHandler(async (req, res) => {
  res.send("");
});

// @desc   Get logged in user orders
// @route  GET /api/orders/myorders
// @access Private
const getMyOrders = asynHandler(async (req, res) => {
  res.send("");
});

// @desc   Get order by ID
// @route  GET /api/orders/:id
// @access Private
const getOrderById = asynHandler(async (req, res) => {
  res.send("");
});

// @desc   Update order to paid
// @route  PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asynHandler(async (req, res) => {
  res.send("");
});

// @desc   Update order to delivered
// @route  PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asynHandler(async (req, res) => {
  res.send("");
});

// @desc   Get all orders
// @route  PUT /api/orders
// @access Private
const getOrders = asynHandler(async (req, res) => {
  res.send("");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
