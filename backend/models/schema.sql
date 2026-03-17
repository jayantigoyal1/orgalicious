-- Orgalicious Database Schema
-- Run this file to initialize the database

-- Plans table
CREATE TABLE IF NOT EXISTS plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  tagline VARCHAR(255),
  price INTEGER NOT NULL,
  meals_per_day INTEGER NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  badge VARCHAR(50),
  is_popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  plan VARCHAR(100) NOT NULL,
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  avatar_initial CHAR(1),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed plans
INSERT INTO plans (name, tagline, price, meals_per_day, features, badge, is_popular) VALUES
(
  'Weight Loss Plan',
  'Burn fat, not willpower.',
  3500,
  2,
  '["Nutritionist designed", "Low calorie balanced meals", "High fibre & protein", "Daily delivery", "Pause anytime"]',
  NULL,
  FALSE
),
(
  'Muscle Gain Plan',
  'Fuel your gains every day.',
  4500,
  3,
  '["High protein meals", "Calorie surplus calculated", "Pre & post workout meals", "Daily delivery", "Customizable portions"]',
  'Most Popular',
  TRUE
),
(
  'Balanced Lifestyle Plan',
  'Eat clean. Live well.',
  4000,
  2,
  '["Flexible meal selection", "Balanced macros", "Variety of cuisines", "Daily delivery", "Skip or pause anytime"]',
  NULL,
  FALSE
);

-- Seed testimonials
INSERT INTO testimonials (name, city, plan, quote, rating, avatar_initial) VALUES
(
  'Priya Sharma',
  'Mumbai',
  'Weight Loss Plan',
  'I lost 8 kgs in just 2 months without starving! The meals are delicious and I never felt like I was dieting. Orgalicious changed my life!',
  5,
  'P'
),
(
  'Rahul Verma',
  'Delhi',
  'Muscle Gain Plan',
  'As someone who goes to the gym regularly, finding the right nutrition was a challenge. Orgalicious''s Muscle Gain plan gave me exactly what I needed. My gains have been incredible!',
  5,
  'R'
),
(
  'Anita Nair',
  'Bangalore',
  'Balanced Lifestyle Plan',
  'The Balanced Lifestyle plan fits perfectly into my busy work schedule. Fresh, tasty food delivered daily – I haven''t cooked in 3 months and I feel healthier than ever!',
  5,
  'A'
),
(
  'Karan Mehta',
  'Pune',
  'Muscle Gain Plan',
  'The portions are spot on and the food actually tastes restaurant quality. My trainer was shocked at how fast I progressed once I switched to Orgalicious!',
  5,
  'K'
),
(
  'Sneha Patel',
  'Ahmedabad',
  'Weight Loss Plan',
  'I was skeptical at first but this is genuinely the best decision I made for my health. Down 12 kgs in 3 months. The nutritionists really know what they''re doing.',
  5,
  'S'
),
(
  'Vikram Singh',
  'Chennai',
  'Balanced Lifestyle Plan',
  'Convenience at its finest. No grocery shopping, no meal prep, no stress. Just delicious healthy food at my door every morning. Worth every rupee.',
  5,
  'V'
);
