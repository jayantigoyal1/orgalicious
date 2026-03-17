import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../services/api.js';
import './Testimonials.css';

const fallbackTestimonials = [
  { id: 1, name: 'Priya Sharma', city: 'Mumbai', plan: 'Weight Loss Plan', quote: 'I lost 8 kgs in just 2 months without starving! The meals are delicious and I never felt like I was dieting. Orgalicious changed my life!', rating: 5, avatar_initial: 'P' },
  { id: 2, name: 'Rahul Verma', city: 'Delhi', plan: 'Muscle Gain Plan', quote: "As someone who goes to the gym regularly, finding the right nutrition was a challenge. Orgalicious's Muscle Gain plan gave me exactly what I needed. My gains have been incredible!", rating: 5, avatar_initial: 'R' },
  { id: 3, name: 'Anita Nair', city: 'Bangalore', plan: 'Balanced Lifestyle Plan', quote: "The Balanced Lifestyle plan fits perfectly into my busy work schedule. Fresh, tasty food delivered daily – I haven't cooked in 3 months and I feel healthier than ever!", rating: 5, avatar_initial: 'A' },
  { id: 4, name: 'Karan Mehta', city: 'Pune', plan: 'Muscle Gain Plan', quote: 'The portions are spot on and the food actually tastes restaurant quality. My trainer was shocked at how fast I progressed once I switched to Orgalicious!', rating: 5, avatar_initial: 'K' },
  { id: 5, name: 'Sneha Patel', city: 'Ahmedabad', plan: 'Weight Loss Plan', quote: "I was skeptical at first but this is genuinely the best decision I made for my health. Down 12 kgs in 3 months. The nutritionists really know what they're doing.", rating: 5, avatar_initial: 'S' },
  { id: 6, name: 'Vikram Singh', city: 'Chennai', plan: 'Balanced Lifestyle Plan', quote: 'Convenience at its finest. No grocery shopping, no meal prep, no stress. Just delicious healthy food at my door every morning. Worth every rupee.', rating: 5, avatar_initial: 'V' },
];

const AVATAR_COLORS = ['#d4edda', '#cce5ff', '#fff3cd', '#f8d7da', '#e2d9f3', '#d1ecf1'];

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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials().then(data => {
      setTestimonials(data || fallbackTestimonials);
      setLoading(false);
    });
  }, []);

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <div className="testimonials-page">
      {/* Hero */}
      <section className="testimonials-hero">
        <div className="container">
          <h1>Real Results. Real People.</h1>
          <p>Hundreds of members transforming their lives with Orgalicious — one meal at a time.</p>
          <div className="testimonials-hero__stats">
            <div className="stat">
              <strong>500+</strong>
              <span>Happy Members</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>4.9★</strong>
              <span>Average Rating</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>98%</strong>
              <span>Would Recommend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="testimonials-grid-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner">Loading stories...</div>
          ) : (
            <div className="testimonials-masonry">
              {displayTestimonials.map((t, i) => (
                <div className="testimonial-full-card" key={t.id}>
                  <div className="testimonial-full-card__top">
                    <StarRating count={t.rating} />
                    <div
                      className="testimonial-full-card__avatar"
                      style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    >
                      {t.avatar_initial}
                    </div>
                  </div>
                  <blockquote>"{t.quote}"</blockquote>
                  <div className="testimonial-full-card__author">
                    <strong>{t.name}</strong>
                    <div className="testimonial-full-card__meta">
                      <span className="testimonial-full-card__city">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        {t.city}
                      </span>
                      <span className="testimonial-full-card__plan">{t.plan}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="testimonials-cta section-padding">
        <div className="container">
          <div className="testimonials-cta__inner">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80"
              alt="Healthy food spread"
              className="testimonials-cta__img"
            />
            <div className="testimonials-cta__content">
              <h2>Ready to Write Your Own Story?</h2>
              <p>Join our growing family of health-conscious members and start your transformation today.</p>
              <a href="/pricing" className="btn-green-lg">View Meal Plans →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
