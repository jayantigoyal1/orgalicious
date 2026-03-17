import { useEffect, useState } from 'react';
import { fetchPlans } from '../services/api.js';
import './Pricing.css';

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

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans().then(data => {
      setPlans(data || fallbackPlans);
      setLoading(false);
    });
  }, []);

  const displayPlans = plans.length > 0 ? plans : fallbackPlans;

  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>No hidden fees. No long-term contracts. Just fresh, healthy food — delivered daily.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="plans-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner">Loading plans...</div>
          ) : (
            <div className="plans-grid">
              {displayPlans.map((plan) => {
                const features = Array.isArray(plan.features)
                  ? plan.features
                  : JSON.parse(plan.features || '[]');

                return (
                  <div className={`plan-card ${plan.is_popular ? 'plan-card--popular' : ''}`} key={plan.id}>
                    {plan.badge && (
                      <div className="plan-card__badge">{plan.badge}</div>
                    )}
                    <div className="plan-card__header">
                      <h3>{plan.name}</h3>
                      <p className="plan-card__tagline">{plan.tagline}</p>
                      <div className="plan-card__price">
                        <span className="plan-card__price-currency">₹</span>
                        <span className="plan-card__price-amount">{plan.price.toLocaleString('en-IN')}</span>
                        <span className="plan-card__price-period">/month</span>
                      </div>
                      <div className="plan-card__meals">
                        {plan.meals_per_day} meals per day
                      </div>
                    </div>
                    <ul className="plan-card__features">
                      {features.map((feature, i) => (
                        <li key={i}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`plan-card__cta ${plan.is_popular ? 'plan-card__cta--popular' : ''}`}>
                      Get Started
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FAQ / Reassurance */}
      <section className="pricing-reassurance section-padding">
        <div className="container">
          <h2>Everything Included</h2>
          <div className="reassurance-grid">
            {[
              { icon: '🚚', title: 'Free Daily Delivery', desc: 'No delivery charges — ever. Fresh meals at your door every morning.' },
              { icon: '⏸️', title: 'Pause Anytime', desc: 'Going on vacation? Pause your plan with zero penalty.' },
              { icon: '🔄', title: 'Swap Meals', desc: 'Don\'t like what\'s on the menu? Swap meals up to 24 hours in advance.' },
              { icon: '📞', title: 'Dedicated Support', desc: 'A real human to help you with anything, 7 days a week.' },
            ].map((item, i) => (
              <div className="reassurance-card" key={i}>
                <span className="reassurance-card__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
