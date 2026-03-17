const pool = require('../models/db');

const fallbackTestimonials = [
  { id: 1, name: 'Priya Sharma', city: 'Mumbai', plan: 'Weight Loss Plan', quote: 'I lost 8 kgs in just 2 months without starving! The meals are delicious and I never felt like I was dieting. Orgalicious changed my life!', rating: 5, avatar_initial: 'P' },
  { id: 2, name: 'Rahul Verma', city: 'Delhi', plan: 'Muscle Gain Plan', quote: "As someone who goes to the gym regularly, finding the right nutrition was a challenge. Orgalicious's Muscle Gain plan gave me exactly what I needed. My gains have been incredible!", rating: 5, avatar_initial: 'R' },
  { id: 3, name: 'Anita Nair', city: 'Bangalore', plan: 'Balanced Lifestyle Plan', quote: "The Balanced Lifestyle plan fits perfectly into my busy work schedule. Fresh, tasty food delivered daily – I haven't cooked in 3 months and I feel healthier than ever!", rating: 5, avatar_initial: 'A' },
  { id: 4, name: 'Karan Mehta', city: 'Pune', plan: 'Muscle Gain Plan', quote: 'The portions are spot on and the food actually tastes restaurant quality. My trainer was shocked at how fast I progressed once I switched to Orgalicious!', rating: 5, avatar_initial: 'K' },
  { id: 5, name: 'Sneha Patel', city: 'Ahmedabad', plan: 'Weight Loss Plan', quote: 'I was skeptical at first but this is genuinely the best decision I made for my health. Down 12 kgs in 3 months. The nutritionists really know what they\'re doing.', rating: 5, avatar_initial: 'S' },
  { id: 6, name: 'Vikram Singh', city: 'Chennai', plan: 'Balanced Lifestyle Plan', quote: 'Convenience at its finest. No grocery shopping, no meal prep, no stress. Just delicious healthy food at my door every morning. Worth every rupee.', rating: 5, avatar_initial: 'V' },
];

const getTestimonials = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error, using fallback data:', err.message);
    res.json(fallbackTestimonials);
  }
};

module.exports = { getTestimonials };
