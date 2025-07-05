# 🤖 Gemini Chatbot

**Gemini Chatbot** is a lightweight, browser-based AI assistant powered by **Google's Gemini 1.5 Flash** model. It enables natural, real-time conversations and supports PDF uploads to extract summaries, key topics, and relevant questions — all directly from your browser, with **no backend setup required**.

![Gemini Chatbot Screenshot](./bot.jpg)

---

## 📌 Table of Contents

- ✨ [Features](#-features)  
- 🛠️ [Technology Stack](#-technology-stack)  
- 📁 [Project Structure](#-project-structure)  
- 🧰 [Setup & Installation](#-setup--installation)  
- 📘 [User Manual](#-user-manual)  
- 🔐 [API Key & Security](#-api-key--security)  
- 📄 [License](#-license)  
- ❤️ [Author](#️-made-with-love-by-hitesh-sharma)  

---

## ✨ Features

- 💬 **Conversational Chatbot**  
  Chat with a Gemini-powered AI assistant using simple text input.

- 📄 **PDF Upload & Analysis**  
  Upload any `.pdf` file to:
  - Get a quick summary (3–5 bullet points)
  - Extract main topics or sections
  - Receive 3–5 intelligent questions based on the document

- ⚡ **Real-Time, In-Browser AI**  
  All AI communication happens instantly in the browser — no server needed.

- 🖼️ **Profile Avatars**  
  Separate avatars for user and bot enhance the conversational experience.

- 🌗 **Dark-Themed, Responsive UI**  
  Modern, mobile-friendly interface with a clean dark mode look.

- 🧩 **Frontend-Only Architecture**  
  100% frontend — just open the HTML file and start chatting.

---

## 🛠️ Technology Stack

| Technology                | Purpose                                                  |
|---------------------------|----------------------------------------------------------|
| **HTML5**                 | Core structure of the chatbot interface                  |
| **CSS3**                  | Custom dark-mode styling                                 |
| **JavaScript (Vanilla)**  | Chat logic, API calls, PDF handling                      |
| **Google Gemini API**     | Powers smart AI responses                                |
| **PDF.js**                | Parses PDF content directly in the browser               |

---

## 📁 Project Structure

```
gemini-chatbot/
├── index.html      # Main HTML structure
├── styles.css      # Dark-mode CSS styling
├── script.js       # AI logic, user interaction, PDF parsing
├── bot.jpg         # Bot avatar image
├── user.jpg        # User avatar image
```

---

## 🧰 Setup & Installation

You can run **Gemini Chatbot** locally in just a few steps:

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/gemini-chatbot.git
cd gemini-chatbot
```

2. **Add Your API Key**

Open `script.js` and replace the placeholder with your **actual Gemini API key**:

```js
const API_KEY = 'AIzaSyA31nPOsoxjCSYQsg2l5u3QvUBVbIE835U';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
```

3. **Run the App**

Open `index.html` in any modern browser — **no installation, build process, or server setup required.**

---

## 📘 User Manual

### 💬 Chat Mode

- Type your message in the input field.
- Press **Enter** or click **Send**.
- The bot responds instantly.

### 📄 PDF Mode

- Click **Upload PDF** and select any `.pdf` file.
- The chatbot will:
  - Summarize the content
  - Extract key topics
  - Suggest relevant questions

### 🔄 Reset

- Simply refresh the browser to start a new session.

---

## 🔐 API Key & Security

> ⚠️ **Important:** This is a frontend-only project. Your Gemini API key is **visible** in the browser’s JavaScript.

### ✅ Recommended Best Practices

If you plan to use this in production:

- Use a **backend proxy** to hide the API key.
- In **Google Cloud Console**:
  - Restrict the API key by domain.
  - Set usage quotas.
  - Enable logging and monitoring.

These steps help protect your key from abuse.

---

## 📄 License

This project is licensed under the **MIT License**:

```
MIT License

Copyright (c) 2025 Hitesh Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND.
```

---

## ❤️ Made with Love by Hitesh Sharma

Thank you for checking out **Gemini Chatbot**!  
If you like it, consider giving it a ⭐, forking 🍴 it, or sharing feedback.

**Keep building awesome things! 🚀**
