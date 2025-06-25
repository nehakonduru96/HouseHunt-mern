const axios = require('axios');

const fetchLocationData = async (query) => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: query,
        format: 'json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};

module.exports = { fetchLocationData };
