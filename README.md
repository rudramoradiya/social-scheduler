# 🚀 Social Scheduler

> **Create. Schedule. Publish. Grow.**  
> An AI-powered social media management platform that helps creators, marketers, and teams generate engaging content, create visuals, schedule posts, and manage multiple social accounts—all from one modern dashboard.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/AI-Google%20Gemini-orange" />
  <img src="https://img.shields.io/badge/License-MIT-purple" />
</p>

---

# 📖 Overview

Managing social media shouldn't feel like juggling multiple tools.

**Social Scheduler** brings everything together in one seamless experience—AI-powered content generation, image creation, scheduling, publishing, analytics, and account management.

Whether you're a **content creator**, **startup**, **marketing agency**, or **business owner**, Social Scheduler helps you create better content faster and publish it effortlessly.

---

# ✨ Features

## 🤖 AI Content Generation
Generate engaging, platform-ready captions using **Google Gemini AI**.

- Smart prompt-based generation
- Multiple writing tones
- Brand-friendly content
- Save recent generations

---

## 🎨 AI Image Generation

Generate matching visuals for your posts using **Leonardo AI**.

- AI-powered artwork
- Social media optimized
- One-click image generation
- Cloud storage via Cloudinary

---

## 📅 Smart Post Scheduling

Never miss the perfect posting time.

- Schedule posts in advance
- Automatic publishing
- Background cron scheduler
- Reliable queue management

---

## 📱 Multi-Platform Publishing

Connect multiple social media accounts through **Zernio API** and publish from a single dashboard.

Supported workflow includes:

- Account connection
- Multi-account publishing
- Scheduled publishing
- Publishing history

---

## 📊 Interactive Dashboard

Track everything in one beautiful dashboard.

- Scheduled posts
- Published posts
- Connected accounts
- Activity timeline
- Recent AI generations

---

## ☁️ Cloud Media Storage

Images are securely stored using **Cloudinary**.

- Fast delivery
- Secure storage
- Easy retrieval
- Optimized media URLs

---

## 🔒 Secure Authentication

- JWT Authentication
- Protected Routes
- Secure API Access
- Environment Variable Protection

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB |
| Authentication | JWT |
| AI Text | Google Gemini (`@google/genai`) |
| AI Images | Leonardo AI |
| Media Storage | Cloudinary |
| Social Publishing | Zernio API |
| Scheduling | node-cron |

---

# 🏗 Architecture

```
                +----------------------+
                |      React Client    |
                +----------+-----------+
                           |
                     REST APIs
                           |
                +----------v-----------+
                |    Express Server    |
                +----------+-----------+
                           |
      -----------------------------------------------
      |             |              |                |
      |             |              |                |
 MongoDB      Gemini AI      Leonardo AI      Zernio API
      |             |              |                |
      -----------------------------------------------
                           |
                    Cloudinary Storage
                           |
                    node-cron Scheduler
```

---

# ⚡ How It Works

### 1️⃣ Enter Your Prompt

Describe the content you'd like AI to generate.

Example:

> Create a motivational Instagram post for entrepreneurs.

---

### 2️⃣ Select a Tone

Choose how your content should sound.

- Professional
- Creative
- Funny
- Friendly
- Inspirational

---

### 3️⃣ Generate Content

AI instantly creates:

- Caption
- Hashtags
- Optional Image

---

### 4️⃣ Review & Edit

Modify the generated content before publishing.

---

### 5️⃣ Schedule

Choose:

- Date
- Time
- Social Accounts

---

### 6️⃣ Automatic Publishing

The scheduler automatically publishes your post at the selected time and records the activity.

---

# 📂 Project Structure

```
Social-Scheduler/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── assets/
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── ...
│
├── README.md
└── package.json
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/social-scheduler.git

cd social-scheduler
```

---

## 2. Install Dependencies

### Backend

```bash
cd server

npm install
```

### Frontend

```bash
cd ../client

npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **server** directory.

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

LEONARDO_API_KEY=your_leonardo_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ZERNIO_API_KEY=your_zernio_api_key

PORT=3000
```

> **Never expose your API keys in the frontend.**

---

# ▶ Running the Project

## Start Backend

```bash
cd server

npm run server
```

---

## Start Frontend

```bash
cd client

npm run dev
```

---

Visit:

```
http://localhost:5173
```

---

# 📸 Core Modules

### ✍ AI Composer

Generate captions using Google Gemini.

Features:

- Prompt input
- Tone selection
- Saved generations
- AI image generation

---

### 📅 Scheduler

Plan your content calendar.

Supports:

- Future scheduling
- Multiple accounts
- Automatic publishing

---

### 📱 Social Accounts

Manage connected accounts.

- Connect
- Disconnect
- Publish
- Authentication

---

### 📊 Dashboard

Visual overview of your workspace.

Includes:

- Total Posts
- Scheduled Posts
- Published Posts
- Activity Feed
- Recent Content

---

### 📂 Activity Logs

Automatically records:

- Scheduled posts
- Published posts
- Failed publishing attempts
- AI generations

---

# 🔐 Security

✔ JWT Authentication

✔ Protected Routes

✔ Environment Variables

✔ Secure Cloudinary Uploads

✔ Backend-only API Keys

✔ MongoDB Data Protection

---

# 💡 Best Practices

- Keep your API keys private.
- Review AI-generated content before publishing.
- Connect social accounts before scheduling posts.
- Use descriptive prompts for higher-quality AI results.
- Regularly monitor scheduled posts and activity logs.

---

# 🌟 Why Social Scheduler?

Instead of switching between multiple tools for writing captions, generating images, scheduling content, and managing accounts, **Social Scheduler** combines everything into one unified platform.

It helps creators and teams:

- 🚀 Save hours every week
- ✍ Generate engaging content instantly
- 🎨 Create visuals with AI
- 📅 Automate publishing
- 📊 Stay organized with one dashboard
- 📱 Manage multiple social platforms effortlessly

---

# 🔮 Future Improvements

- LinkedIn Publishing
- Facebook Publishing
- Instagram Reels Support
- AI Caption Rewriter
- Team Collaboration
- Draft Management
- Calendar View
- Analytics Dashboard
- Notifications
- Dark Mode Enhancements

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 🙌 Acknowledgements

Built using amazing technologies:

- React
- TypeScript
- Vite
- Node.js
- Express
- MongoDB
- Google Gemini
- Leonardo AI
- Cloudinary
- Zernio API
- Tailwind CSS

---

# ⭐ If you found this project useful...

Give it a ⭐ on GitHub and support the project!

**Happy Creating. Happy Scheduling. 🚀**
