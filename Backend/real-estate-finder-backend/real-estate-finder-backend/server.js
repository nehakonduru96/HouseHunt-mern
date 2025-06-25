// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const propertiesRouter = require('./routes/properties');

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use('/properties', propertiesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
