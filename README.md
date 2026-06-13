# 📚 Learning Dashboard

A modern and responsive Learning Dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Supabase**. The dashboard displays course progress, learning streaks, and activity tracking with a clean dark-themed UI.

## 🚀 Live Demo

🔗 https://learning-dashboard-qn4u.vercel.app/

## 📂 GitHub Repository

🔗 https://github.com/gparihar/learning-dashboard

---

## ✨ Features

- 📊 Course Progress Tracking
- 🔥 Learning Streak Display
- 📈 Activity Grid Visualization
- ⚡ Real-time Data from Supabase
- 🎨 Modern Dark UI Design
- 📱 Fully Responsive Layout
- 🚀 Fast Performance with Next.js

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend & Database
- Supabase

### Deployment
- Vercel

---

## 📸 Screenshot

![Learning Dashboard](https://learning-dashboard-qn4u.vercel.app/og-image.png)

---

## 📁 Project Structure

```bash
learning-dashboard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Sidebar.tsx
│   ├── HeroCard.tsx
│   ├── ActivityCard.tsx
│   ├── CourseCard.tsx
│   └── BentoGrid.tsx
│
├── lib/
│   └── supabase.ts
│
├── public/
├── types/
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/gparihar/learning-dashboard.git
cd learning-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🗄️ Supabase Database Schema

### courses

| Column | Type |
|----------|----------|
| id | uuid |
| title | text |
| progress | int4 |
| icon_name | text |
| created_at | timestamp |

---

## 🎯 Learning Dashboard Data

| Course | Progress |
|----------|----------|
| Advanced React Patterns | 75% |
| Next.js Mastery | 60% |
| TypeScript Deep Dive | 45% |
| UI Animation Design | 90% |

---

## 📌 Future Improvements

- User Authentication
- Progress Updates
- Course Creation
- Analytics Dashboard
- Charts & Graphs
- Profile Management

---

## 👨‍💻 Author

**Gaurav Parihar**

- GitHub: https://github.com/gparihar
- LinkedIn: www.linkedin.com/in/gaurav-parihar-13a506288

---

## 📄 License

This project is created for learning and internship purposes.

MIT License © 2026 Gaurav Parihar
