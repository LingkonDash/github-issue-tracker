# 🐙 GitHub Issues Tracker

A clean, responsive issue-tracking dashboard inspired by GitHub Issues — built with vanilla JavaScript, Tailwind CSS, and DaisyUI. Sign in, browse issues, filter by status, and manage everything from a single, polished interface.

**🔗 Live Demo:** [https://lingkondash.github.io/github-issue-tracker/](https://lingkondash.github.io/github-issue-tracker/)


---

## 📖 Overview

**GitHub Issues Tracker** recreates the core experience of GitHub's native issue tracker as a lightweight, standalone web app. It starts with a login screen, then drops you into a dashboard where issues can be viewed, searched, and filtered by status — all wrapped in a modern, card-based UI.

This project was built as a hands-on exercise in DOM manipulation, dynamic UI state, and component-style design using plain HTML/CSS/JS — no frameworks required.

---

## ✨ Features

- 🔐 **Login Screen** — Simple credential-based sign-in flow with a show/hide password toggle
- 📊 **Issues Dashboard** — Central view showing total issue count and status breakdown
- 🟢 **Status Filtering** — Instantly filter issues by **All**, **Open**, or **Closed**
- 🔍 **Live Search** — Search bar to quickly find issues by keyword (desktop & mobile)
- 🗂️ **Issue Cards** — Clean, grid-based layout that adapts from 1 to 4 columns depending on screen size
- 🪟 **Issue Detail Modal** — View full issue details without leaving the page
- ⏳ **Loading State** — Spinner shown while issues are being fetched/loaded
- 📱 **Fully Responsive** — Dedicated mobile navigation with a collapsible dropdown menu
- ➕ **New Issue Button** — Quick-access action to create a new issue

---

## 🛠️ Tech Stack

| Category         | Technology                          |
| ------------------ | -------------------------------------- |
| **Structure**       | HTML5                                  |
| **Styling**         | Tailwind CSS v4 · DaisyUI 5             |
| **Icons**           | Font Awesome 7                          |
| **Logic**           | Vanilla JavaScript                      |
| **Fonts**           | Geist                                    |
| **Deployment**      | GitHub Pages                             |

---

## 📂 Project Structure

```
github-issue-tracker/
├── assets/              # Logos, icons, and status indicator images
├── scripts/
│   ├── login.js         # Handles login form logic & password visibility toggle
│   └── main.js          # Handles issue loading, filtering, search, and modals
├── index.html            # Login page
├── main.html              # Issues dashboard
├── style.css              # Custom styles & Geist font setup
├── tailwind.config.js
└── readme.md
```

---

## 🔑 Demo Credentials

The login page uses a simple hardcoded check for demo purposes:

| Field       | Value       |
| ------------ | ------------ |
| **Username**  | `admin`      |
| **Password**  | `admin123`   |

---

## 🚀 Getting Started

Since this is a static HTML/CSS/JS project, no build step or package installation is required.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/LingkonDash/github-issue-tracker.git
   cd github-issue-tracker
   ```

2. **Open the app**

   Simply open `index.html` in your browser, or serve it locally for the best experience:
   ```bash
   npx serve .
   ```
   or, if you have Python installed:
   ```bash
   python -m http.server 5500
   ```

3. **Log in** using the demo credentials above, and you'll land on the issues dashboard (`main.html`).

---

## 🖥️ App Flow

1. **`index.html`** — User lands on the login screen and signs in with the demo credentials
2. **`main.html`** — On successful login, the user is taken to the dashboard where they can:
   - View total issue count at a glance
   - Filter issues using the **All / Open / Closed** buttons
   - Search issues by keyword
   - Click into an issue to view details in a modal
   - Create a new issue via the **+ New Issue** button

---

## 🎯 What I Learned

- Building multi-page vanilla JS applications without a framework
- Structuring reusable UI patterns (cards, modals, dropdowns) with plain DOM APIs
- Styling efficiently with Tailwind CSS v4 and the DaisyUI component library
- Managing UI state (active filters, search queries, loading states) using plain JavaScript
- Designing a fully responsive layout with distinct desktop and mobile navigation patterns

---

## 📌 Future Improvements

- [ ] Connect to the real GitHub REST API to fetch live repository issues
- [ ] Add proper authentication instead of hardcoded demo credentials
- [ ] Persist issues using local storage or a backend database
- [ ] Add labels, assignees, and comment threads to issue cards
- [ ] Add sorting (by date, priority, or activity)

---

## 📄 License

This project is open source and available for learning purposes.

---

## 🙋 Author

Built with ❤️ by **Lingkon Dash**

- GitHub: [@LingkonDash](https://github.com/LingkonDash)
- Live Demo: [lingkondash.github.io/github-issue-tracker](https://lingkondash.github.io/github-issue-tracker/)
