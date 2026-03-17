import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTestimonials } from '../services/api.js';
import './Home.css';

const MEAL_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', name: 'Quinoa Superbowl', kcal: 420, tags: ['High Protein', 'Vegan'] },
  { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', name: 'Grilled Salmon Asparagus', kcal: 510, tags: ['Omega 3', 'Low Carb'], featured: true },
  { url: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&q=80', name: 'Chicken Protein Prep', kcal: 580, tags: ['Muscle Gain', 'Balanced'] },
];

function StarRating({ count = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5c518">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(data => {
      if (data) setTestimonials(data.slice(0, 3));
    });
  }, []);

  const fallbackTestimonials = [
    { id: 1, name: 'Priya Sharma', city: 'Mumbai', plan: 'Weight Loss Plan', quote: 'I lost 8 kgs in just 2 months without starving! The meals are delicious and I never felt like I was dieting. Orgalicious changed my life!', rating: 5, avatar_initial: 'P' },
    { id: 2, name: 'Rahul Verma', city: 'Delhi', plan: 'Muscle Gain Plan', quote: "Orgalicious's Muscle Gain plan gave me exactly what I needed. My gains have been incredible!", rating: 5, avatar_initial: 'R' },
    { id: 3, name: 'Anita Nair', city: 'Bangalore', plan: 'Balanced Lifestyle Plan', quote: "Fresh, tasty food delivered daily – I haven't cooked in 3 months and I feel healthier than ever!", rating: 5, avatar_initial: 'A' },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=1400&q=80"
            alt="Fresh healthy meal"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <div className="hero__badge">
            <span>🌿</span> Premium Meal Subscriptions
          </div>
          <h1 className="hero__title">
            You've Got Goals.<br />
            <span className="hero__title--accent">We've Got Meals.</span>
          </h1>
          <p className="hero__subtitle">
            Customized healthy meal subscriptions designed by nutritionists,<br className="break-desktop" />
            prepared by chefs, and delivered fresh to your door every single day.
          </p>
          <Link to="/pricing" className="hero__cta">
            View Plans <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Your journey to effortless healthy eating starts here.</p>
          </div>
          <div className="steps-grid">
            {[
              { icon: '✅', title: 'Choose Your Plan', desc: 'Select a goal-oriented plan that fits your lifestyle.' },
              { icon: '🍽️', title: 'Customize Meals', desc: 'Swap meals, note allergies, and set preferences.' },
              { icon: '🚚', title: 'Fresh Delivery', desc: 'Wake up to freshly cooked meals at your doorstep.' },
              { icon: '🔄', title: 'Total Flexibility', desc: 'Pause, skip, or modify your plan anytime.' },
            ].map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEAL HIGHLIGHTS ── */}
      <section className="meal-highlights section-padding">
        <div className="container">
          <div className="meal-highlights__header">
            <div>
              <h2>Taste The Quality</h2>
              <p>A sneak peek at what you could be eating this week.</p>
            </div>
            <Link to="/pricing" className="see-all-link">See All Menu Items →</Link>
          </div>
          <div className="meal-cards">
            {MEAL_IMAGES.map((meal, i) => (
              <div className={`meal-card ${meal.featured ? 'meal-card--featured' : ''}`} key={i}>
                <div className="meal-card__img-wrap">
                  <img src={meal.url} alt={meal.name} loading="lazy" />
                  <span className="meal-card__kcal">{meal.kcal} kcal</span>
                </div>
                <div className="meal-card__info">
                  <h3>{meal.name}</h3>
                  <div className="meal-card__tags">
                    {meal.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="benefits section-padding">
        <div className="container">
          <div className="benefits__inner">
            <div className="benefits__text">
              <h2>Why Orgalicious?</h2>
              <p>Every meal is a promise — to your body, your goals, and your time.</p>
              <ul className="benefits__list">
                {[
                  { icon: '🥗', title: 'Nutritionist Designed', desc: 'Every meal planned by certified nutrition experts.' },
                  { icon: '⚖️', title: 'Portion Controlled', desc: 'Perfect macros, zero guesswork.' },
                  { icon: '👨‍🍳', title: 'Chef Prepared Daily', desc: 'Fresh cooked every morning, never frozen.' },
                  { icon: '🔁', title: 'Flexible Subscriptions', desc: 'Pause, skip or cancel anytime — no contracts.' },
                ].map((b, i) => (
                  <li key={i} className="benefits__item">
                    <span className="benefits__item-icon">{b.icon}</span>
                    <div>
                      <strong>{b.title}</strong>
                      <p>{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefits__image">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80"
                alt="Fresh healthy meal prep"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="home-testimonials section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Real Results. Real People.</h2>
            <p>Join hundreds of members transforming their lives.</p>
          </div>
          <div className="testimonials-grid">
            {displayTestimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <StarRating count={t.rating} />
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="avatar">{t.avatar_initial}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city} · {t.plan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/testimonials" className="btn-outline">Read More Stories →</Link>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM BANNER ── */}
      <section className="instagram-banner">
        <div className="instagram-banner__bg">
          <img src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1400&q=80" alt="Healthy food spread" />
          <div className="instagram-banner__overlay" />
        </div>
        <div className="instagram-banner__content container">
          <div className="instagram-banner__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <h2>Follow Our Transformations on Instagram</h2>
          <p>Thousands of before/afters, daily meal shots, and real stories from real subscribers.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-banner__cta">
            @orgalicious.in
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta section-padding">
        <div className="container">
          <div className="final-cta__inner">
            <h2>Start Your Healthy Journey Today</h2>
            <p>Choose a plan, customize your meals, and get fresh food delivered tomorrow.</p>
            <Link to="/pricing" className="btn-green-lg">View Plans →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
