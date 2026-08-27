# PoultryMart – Online Naatu Kollu Selling and Buying Platform

**PoultryMart** is a production-ready MERN Marketplace application connecting poultry farmers directly with buyers of authentic **Naatu Kollu (Country Chicken / Natu Kodi)**.

Farmers can register, list their hens, cocks, and breeding stock with photos and videos, manage pricing/location/health info, and toggle WhatsApp availability.
Customers (public visitors) do **NOT** require an account, login, or checkout. They can browse, filter, view photos/videos, and tap once to **Call** or **WhatsApp** the farmer directly.

---

## 🔑 Admin Credentials

- **Email:** `jeevan@poultrymart.com`
- **Password:** `Jeevan1234`
- **Role:** `admin`

---

## ☁️ Database Configuration (MongoDB Atlas)

- **Cluster:** `cluster0.ebqsgxh.mongodb.net`
- **User:** `farm2customer`

---

## 📁 Project Structure

```text
c:\Farm2Bird\
├── frontend/               # Separate React.js + Vite Frontend Project
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                # Separate Node.js + Express REST API Project
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── uploads/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ How to Run Locally

### 1. Backend Project (`/backend`)
```bash
cd backend
npm install
npm run seed     # Seeds Admin (jeevan@poultrymart.com / Jeevan1234) & Naatu Kollu listings into MongoDB Atlas
npm start        # Starts Express API server on http://localhost:5000
```

### 2. Frontend Project (`/frontend`)
```bash
cd frontend
npm install
npm run dev      # Starts Vite development server on http://localhost:5173
```
"# Poultry_Mart" 
"# Poultry_Mart" 
"# Poultry_Mart" 
