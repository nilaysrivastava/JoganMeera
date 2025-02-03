import asyncHandler from "express-async-handler";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../services/orderServices.js";

// @desc Create an Order
// @route POST /api/orders
// @access Public
export const placeOrder = asyncHandler(async (req, res) => {
  const order = await createOrder(req.body);
  res.status(201).json(order);
});

// @desc Get all Orders
// @route GET /api/orders
// @access Admin
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
});

// @desc Get Order by ID
// @route GET /api/orders/:id
// @access Admin
export const getSingleOrder = asyncHandler(async (req, res) => {
  const order = await getOrderById(req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Update Order Status
// @route PUT /api/orders/:id
// @access Admin
export const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await updateOrderStatus(req.params.id, req.body.status);
  res.json(updatedOrder);
});
