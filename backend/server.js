require('dotenv').config();
const express = require('express');
const cors = require('cors');

const plansRouter = require('./routes/plans');
const testimonialsRouter = require('./routes/testimonials');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/plans', plansRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/contact', contactRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Orgalicious API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
