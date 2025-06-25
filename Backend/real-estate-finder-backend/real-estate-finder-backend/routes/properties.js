const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { location, type } = req.query;
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${location}+${type}&format=json`;

  try {
    console.log(`Fetching properties for location: ${location}, type: ${type}`);
    const response = await axios.get(nominatimUrl);
    console.log('Properties fetched:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

module.exports = router;
