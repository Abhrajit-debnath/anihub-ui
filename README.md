# Anime Explorer 🎌✨

A modern, responsive anime explorer built with **React.js** and **Tailwind CSS**, allowing users to search for their favorite anime series with a clean UI. Powered by the [Jikan API](https://jikan.moe/) to fetch live anime data from MyAnimeList.

## 🌐 Live Demo

[View the deployed app on Vercel](https://anihub-ui.vercel.app/)  
*(replace the link above with your actual deployed URL)*

---


## ✨ Features

- 🔍 **Search Anime:** Enter keywords to search anime titles using the Jikan API.
- 🖼️ **Hero Banner:** Displays a rotating selection of featured anime with fluid images.
- 🎴 **Anime Cards:** Displays anime with images, ratings, synopsis, and other metadata.
- 🌙 **Dark Themed UI:** Styled beautifully with TailwindCSS.
- 📱 **Responsive Design:** Works across all screen sizes.
- 🧠 **React Hooks:** Uses hooks like `useEffect`, `useState`, and custom window size hooks for responsiveness.

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Jikan API (MyAnimeList Unofficial API)**
- **Vercel** for deployment

---

## 📁 Folder Structure

```bash
.
├── public/
│   └── assets/        # Images, backgrounds
├── src/
│   ├── components/    # Navbar, HeroBanner, AnimeSection, Card components
│   ├── hooks/         # Custom hooks (like useWindowSize)
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
