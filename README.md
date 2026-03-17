# 🌿 Orgalicious — Premium Meal Subscription Website

A full-stack MVP website for a healthy meal subscription service.

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL (schema + seed included)
- **Styling**: Pure CSS with CSS variables (no framework)

---

## Project Structure

```
orgalicious/
├── frontend/                  # React + Vite app
│   ├── src/
│   │   ├── components/        # Navbar, Footer
│   │   ├── pages/             # Home, Pricing, Testimonials, Contact
│   │   ├── services/          # API helper (api.js)
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
└── backend/                   # Express API
    ├── routes/                # plans.js, testimonials.js, contact.js
    ├── controllers/           # business logic per route
    ├── models/
    │   ├── db.js              # PostgreSQL pool
    │   └── schema.sql         # Full DB schema + seed data
    └── server.js
```

---

## Getting Started

### 1. Set up the Database

```bash
# Create the database
psql -U postgres -c "CREATE DATABASE orgalicious;"

# Run the schema + seed
psql -U postgres -d orgalicious -f backend/models/schema.sql
```

### 2. Start the Backend

```bash
cd backend
npm install

# Copy and edit the env file
cp .env.example .env
# Edit .env with your PostgreSQL credentials

npm run dev
# → Server running at http://localhost:5000
```

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
# → App running at http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint        | Description                         |
|--------|-----------------|-------------------------------------|
| GET    | `/plans`        | Fetch all subscription plans        |
| GET    | `/testimonials` | Fetch all customer testimonials     |
| POST   | `/contact`      | Submit a contact/enquiry message    |

### POST /contact — Request Body
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91 98765 43210",
  "message": "I'd like to know more about the Weight Loss Plan."
}
```

---

## Pages

| Route            | Page          | Description                                      |
|------------------|---------------|--------------------------------------------------|
| `/`              | Home          | Hero, How It Works, Meal Highlights, Testimonials, Instagram CTA, Final CTA |
| `/pricing`       | Pricing       | Plan cards fetched from API                      |
| `/testimonials`  | Testimonials  | Full customer stories fetched from API           |
| `/contact`       | Contact Us    | Contact form (POST to API) + contact info        |

---

## Notes

- The frontend has **fallback data** built-in — it works even if the backend is offline.
- No authentication, payments, or ordering system (MVP scope).
- Vite proxy is configured so frontend requests to `/plans`, `/testimonials`, `/contact` are forwarded to the Express server on port 5000.
- Images are pulled from Unsplash (CDN) — no local image assets needed.
