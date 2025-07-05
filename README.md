# 🤖 Gemini Chatbot

**Gemini Chatbot** is a lightweight, browser-based AI assistant powered by Google's Gemini 1.5 Flash model. This chatbot offers intelligent conversation capabilities and an advanced feature that allows users to upload PDF documents for instant summarization, topic extraction, and question suggestions — all directly in the browser with no server setup required.

![Chatbot Screenshot](./bot.jpg)

---

## 📌 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [User Manual](#-user-manual)
- [API Key & Security](#-api-key--security)
- [License](#-license)
- [Author](#-made-with-love-by-hitesh-sharma)

---

## ✨ Features

- 💬 **Conversational Chatbot** – Talk naturally with an AI powered by Gemini.
- 📄 **PDF Analysis** – Upload PDFs and get:
  - Summarized content in bullet points
  - Main topics extracted
  - Suggested questions based on content
- 🧠 **Real-Time Responses** – All interactions are instant and client-side.
- 💻 **Responsive UI** – Clean dark-mode design with mobile-friendly layout.
- 🖼️ **Profile Avatars** – User and bot display pictures.
- 🔧 **No Backend Required** – Fully frontend-based project.

---

## 🛠️ Technology Stack

| Technology      | Description                                           |
|-----------------|-------------------------------------------------------|
| HTML5           | Page structure and layout                            |
| CSS3            | Custom dark-mode styling                             |
| JavaScript (Vanilla) | Handles chat logic, events, and API requests       |
| Gemini 1.5 Flash API | Powers all the intelligent chat responses         |
| PDF.js          | Parses and extracts text from uploaded PDF files     |

---

## 📁 Project Structure

├── index.html # Main HTML template
├── styles.css # Styles and responsive layout
├── script.js # JavaScript logic and API handling
├── bot.jpg # Bot avatar image
├── user.jpg # User avatar image

---

## 🧰 Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/gemini-chatbot.git
cd gemini-chatbot
Insert your Gemini API Key in script.js:

2.javascript
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace this line

3.Run the app:
Simply open index.html in your browser.

  📘 User Manual
💬 Chat Mode
Type your message in the input field.

Click Send or press Enter.

AI responds in real time.

📄 PDF Mode
Click Upload PDF.

Select a .pdf file from your system.

The chatbot:

Summarizes the content

Highlights main topics

Suggests questions

🔄 Reset
Just refresh the page to start a new session.

🔐 API Key & Security
⚠️ Important: This project is fully frontend-based, which means your API key is exposed in the browser.

Best Practices:
Use a proxy server in production to hide your API key.

Restrict the key in Google Cloud Console:

Limit by domain, IP, or usage quota.


MIT License

Copyright (c) 2025 Hitesh Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.



❤️ Made with love by Hitesh Sharma
