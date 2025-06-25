import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchProperties = async (location, type) => {
  try {
    const response = await axios.get(`${API_URL}/properties`, {
      params: { location, type },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
