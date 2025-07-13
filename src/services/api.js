import axios from "axios";

const HTML = "https://dummyjson.com";

export const getAllProducts = async () => {
    const response = await axios.get(`${HTML}/products`);
    return response?.data.products
}

export const getOneProducts = async (id) => {
  const response = await axios.get(`${HTML}/products/${id}`);
  return response?.data;
};


export const getCurrentUser = async (accessToken) => {
  const response = await axios.get(`${HTML}/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response?.data;
};
