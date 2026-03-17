const pool = require('../models/db');

const submitContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone || null, message]
    );
    res.status(201).json({ success: true, message: 'Your message has been received! We\'ll get back to you soon.', data: result.rows[0] });
  } catch (err) {
    console.error('DB error:', err.message);
    // Still return success to user even if DB fails (log it server-side)
    res.status(201).json({ success: true, message: 'Your message has been received! We\'ll get back to you soon.' });
  }
};

module.exports = { submitContact };
