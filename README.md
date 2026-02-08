<h1 align="center">🦷 Dentwise – Dental Platform with AI Voice Agent 🦷</h1>

Dentwise is a modern full-stack **SaaS dental platform** that allows users to book dental appointments, interact with an **AI Voice Agent**, and manage subscriptions seamlessly.  
Built with **Next.js App Router**, designed for scalability, performance, and real-world production use.

<h2>🔗 **Live Demo:** https://dentwise-ochre-seven.vercel.app/</h2>

![Demo App](/public/screenshot-for-readme.png)

## ✨ Highlights

- 🏠 Modern, responsive landing page with clean UI
- 🔐 Secure authentication with **Clerk**
  - Google, GitHub, Email & Password
  - Email verification using 6-digit OTP
- 📅 Smart appointment booking system
- 🦷 3-Step Booking Flow  
  _(Dentist → Service & Time → Confirmation)_
- 📩 Automated email notifications for bookings
- 📊 Admin dashboard for managing appointments
- 🗣️ **AI Voice Agent** powered by **Vapi** (Pro plans)
- 💳 Subscription payments (Free + Paid plans)
- 🧾 Automatic invoice generation via email
- 💸 Smart subscription upgrades (pay only the difference)
- 📂 Persistent data storage with PostgreSQL
- ⚡ Optimized data fetching using TanStack Query
- 🚀 Production deployment with custom domain

---

## 🧠 System Architecture

User
└── Next.js App (UI)
├── Clerk Authentication
├── Server Actions (Next.js)
├── Prisma ORM
├── PostgreSQL Database
├── Email Service (Resend)
├── AI Voice Agent (Vapi)
└── Subscription & Billing (Clerk)

Deployment → Vercel (CI/CD + Custom Domain)

---

## 🛠️ Tech Stack

**Frontend**

- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui

**Backend**

- Next.js Server Actions
- Prisma ORM
- PostgreSQL

**Auth & Payments**

- Clerk Authentication
- Clerk Subscriptions & Billing

**AI & Services**

- Vapi (AI Voice Agent)
- Resend (Transactional Emails)

**Dev & Deployment**

- TanStack Query
- Git & GitHub (PR-based workflow)
- Vercel (Production Deployment)

---

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/dentwise.git
cd dentwise

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create a .env file and add required keys:

DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
RESEND_API_KEY=
VAPI_API_KEY=

4️⃣ Generate Prisma client
npx prisma generate

5️⃣ Run the development server
npm run dev

App will be available at:

http://localhost:3000

📦 Deployment

Dentwise is deployed on Vercel with:

Automatic CI/CD from GitHub

Prisma client generation during build

Custom domain integration

Build Command:

prisma generate && next build
