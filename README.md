# 🏠 ListBnB - Public Advertisement Platform

A minimal buy-and-sell platform where users can register, log in, post advertisements, and browse listings. Built with **React**, **Tailwind CSS**, and integrated with a provided REST API.

---

## 🚀 Live Demo

🔗 [View Live on Vercel](https://planetmedia-test.vercel.app/login)

---

## 🛠 Tech Stack

- **React** – JavaScript library for building UI
- **Tailwind CSS** – Utility-first CSS framework for fast and responsive styling
- **Axios** – For handling API requests
- **Lucide Icons** – For clean and scalable icons

---

## 📦 Features

- User Registration and Login
- JWT-based Authentication (stored securely)
- Public ad listing (grid and list views)
- Authenticated ad creation
- Ad detail view page
- Image fallback handling
- LocalStorage-based user data persistence

---


---

## 🐛 Issues Faced & Solutions

### 1. No API Endpoint for User-Specific Ads
Couldn’t find a dedicated API endpoint to fetch only the ads posted by the currently logged-in user.

**Solution**: Inspected the general ads API response and identified that each ad object included a nested `owner` object. Used the current user’s ID (stored in local storage) to filter ads manually on the frontend.

---

### 2. Individual Ad Fetch Always Returns Same Data
While trying to implement dynamic ad detail views, noticed that the API always returned the same ad regardless of the `id` passed.

**Solution**: Double-checked routing and API call logic, but the issue persisted. Temporarily handled it by setting up the dynamic UI and placeholders, while flagging this behavior as an API limitation for now.

---

### 3. User Data Persistence
Needed a way to maintain user session state after login.

**Solution**: Implemented persistence by storing the user object in `localStorage` upon login. On page/component load, the user data is retrieved and parsed, enabling protected routes and user-specific functionality like ad filtering and profile handling.

---

## 📥 How to Run Locally

```bash
git clone https://github.com/yourusername/listbnb.git
cd listbnb
npm install
npm run dev
 
```

---

## Make sure to configure your .env file with:
```bash
VITE_APP_API_URL=https://ads.planetmedia.app/
VITE_APP_API_KEY=your-api-key
```
