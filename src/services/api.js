import axios from "axios";

const API_BASE_URL = "/api";

export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};
