import Order from "../models/Order.js";

export const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

export const getOrders = async () => {
  return await Order.find();
};

export const getOrderById = async (id) => {
  return await Order.findById(id);
};

export const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};
