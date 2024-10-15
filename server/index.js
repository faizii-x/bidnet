// External Modules
const express = require('express');
const cors =  require('cors');

// Internal Modules
const FrontRoutes = require('./routes/front');

// ENV Configurations
require('dotenv').config();

// Other Configurations
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/front', FrontRoutes);

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})