
import axios from 'axios';

export const handleLogin = async ({ username, password }) => {
  try {
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username,
        password,
        expiresInMins: 30
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("Login uspeo:", response.data);
    return response.data;
  } catch (error) {
    console.error("Greska pri logovanju:", error.response?.data || error.message);
    throw error;
  }
};