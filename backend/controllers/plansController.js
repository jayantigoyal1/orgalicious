const pool = require('../models/db');

// In-memory fallback data in case DB is not connected
const fallbackPlans = [
  {
    id: 1,
    name: 'Weight Loss Plan',
    tagline: 'Burn fat, not willpower.',
    price: 3500,
    meals_per_day: 2,
    features: ['Nutritionist designed', 'Low calorie balanced meals', 'High fibre & protein', 'Daily delivery', 'Pause anytime'],
    badge: null,
    is_popular: false,
  },
  {
    id: 2,
    name: 'Muscle Gain Plan',
    tagline: 'Fuel your gains every day.',
    price: 4500,
    meals_per_day: 3,
    features: ['High protein meals', 'Calorie surplus calculated', 'Pre & post workout meals', 'Daily delivery', 'Customizable portions'],
    badge: 'Most Popular',
    is_popular: true,
  },
  {
    id: 3,
    name: 'Balanced Lifestyle Plan',
    tagline: 'Eat clean. Live well.',
    price: 4000,
    meals_per_day: 2,
    features: ['Flexible meal selection', 'Balanced macros', 'Variety of cuisines', 'Daily delivery', 'Skip or pause anytime'],
    badge: null,
    is_popular: false,
  },
];

const getPlans = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plans ORDER BY price ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error, using fallback data:', err.message);
    res.json(fallbackPlans);
  }
};

module.exports = { getPlans };
