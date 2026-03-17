const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Generic request helper (clean + reusable)
const request = async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data;
  } catch (err) {
    console.error(`API Error [${endpoint}]:`, err.message);
    return null;
  }
};

// GET: Plans
export const fetchPlans = () => request("/plans");

// GET: Testimonials
export const fetchTestimonials = () => request("/testimonials");

// POST: Contact form
export const submitContact = (formData) =>
  request("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });