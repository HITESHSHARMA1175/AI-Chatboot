# 🤖 Gemini Chatbot

**Gemini Chatbot** is a sleek, browser-based AI assistant powered by Google's Gemini 1.5 Flash model. It lets users engage in natural conversations and also upload PDF documents to get instant summaries, topic extractions, and smart question suggestions — all directly from the browser, with no backend setup required.

![Chatbot Screenshot](./bot.jpg)

---

## 📌 Table of Contents

- ✨ [Features](#-features)
- 🛠️ [Technology Stack](#-technology-stack)
- 📁 [Project Structure](#-project-structure)
- 🧰 [Setup & Installation](#-setup--installation)
- 📘 [User Manual](#-user-manual)
- 🔐 [API Key & Security](#-api-key--security)
- 📄 [License](#-license)
- ❤️ [Author](#-️made-with-love-by-hitesh-sharma)

---

## ✨ Features

- 💬 **Conversational Chatbot**  
  Chat naturally with a Gemini-powered AI model using text input.

- 📄 **PDF Upload & Analysis**  
  Users can upload a `.pdf` file to:
  - Get a quick summary (3–5 bullet points)
  - Extract main topics or sections
  - Receive 3–5 questions the user might ask about the document

- ⚡ **Real-Time Responses**  
  All communication with the AI is instant and runs directly in the browser.

- 🖼️ **Profile Avatars**  
  Visual distinction between user and bot using profile images.

- 🌓 **Responsive Dark-Themed UI**  
  Clean, mobile-friendly interface with a modern look.

- 🧩 **Frontend-Only Project**  
  No server or backend setup required — just open and use.

---

## 🛠️ Technology Stack

| Technology                | Purpose                                                  |
|---------------------------|----------------------------------------------------------|
| **HTML5**                 | Core structure and layout of the chatbot page            |
| **CSS3**                  | Styling the UI with a custom dark-mode interface         |
| **JavaScript (Vanilla)**  | Handles message flow, user interaction, PDF handling     |
| **Google Gemini API**     | Provides smart, conversational responses                 |
| **PDF.js**                | Client-side PDF parsing to extract text                  |

---

## 📁 Project Structure

📂 gemini-chatbot/
├── index.html # Main HTML file with structure
├── styles.css # Dark-themed styles for chatbot interface
├── script.js # JavaScript logic and Gemini API handling
├── bot.jpg # Avatar image for the chatbot
├── user.jpg # Avatar image for the user


---

## 🧰 Setup & Installation

Follow these steps to run Gemini Chatbot locally:

1. **Clone this repository:**

```bash
git clone https://github.com/yourusername/gemini-chatbot.git
cd gemini-chatbot

2. add your API key:

Open script.js and replace the placeholder with your real Gemini API key:
const API_KEY = 'AIzaSyA31nPOsoxjCSYQsg2l5u3QvUBVbIE835U';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

Run the application:

Open the index.html file in any modern browser (Chrome, Firefox, Edge).

No installation, build process, or server is required.

📘 User Manual
💬 Chat Mode
Type your message in the input field.

Click the Send button or press Enter.

The chatbot will respond immediately below your message.

📄 PDF Mode
Click on the Upload PDF button.

Choose any .pdf file from your computer.

The chatbot will:

Summarize the contents

List the main topics covered

Suggest questions related to the document

🔄 Reset
Simply refresh the browser to start a new session.

🔐 API Key & Security
⚠️ Warning: This project is frontend-only, meaning your Gemini API key is exposed in the browser’s JavaScript console.

✅ Best Practices (For Production Use):
Use a backend server or proxy to hide your API key.

In Google Cloud Console:

Restrict your API key by domain

Set usage quotas

Enable logging and monitoring

This prevents abuse and keeps your key secure.

MIT License

Copyright (c) 2025 Hitesh Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND.

❤️ Made with love by Hitesh Sharma
Thank you for checking out my project! Feel free to star ⭐ it, fork 🍴 it, or reach out with feedback. Keep building amazing things!
