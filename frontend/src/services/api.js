const BASE_URL = import.meta.env.VITE_API_URL || '';

export const fetchPlans = async () => {
  try {
    const res = await fetch(`${BASE_URL}/plans`);
    if (!res.ok) throw new Error('Failed to fetch plans');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchTestimonials = async () => {
  try {
    const res = await fetch(`${BASE_URL}/testimonials`);
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const submitContact = async (formData) => {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Submission failed');
  return data;
};
