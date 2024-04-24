import axios from "axios";

export const validateToken = async () => {
  try {
    await axios.get(`users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return false;
  }
};
