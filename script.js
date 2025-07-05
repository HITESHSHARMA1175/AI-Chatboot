const API_KEY = 'AIzaSyA31nPOsoxjCSYQsg2l5u3QvUBVbIE835U';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const pdfUpload = document.getElementById('pdf-upload');
const uploadButton = document.getElementById('upload-button');

// PDF.js worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

uploadButton.addEventListener('click', () => {
    pdfUpload.click();
});

pdfUpload.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
        addMessage(`Uploading ${file.name}...`, false);
        const text = await extractTextFromPDF(file);
        await analyzePDF(text);
    } catch (error) {
        console.error("PDF Error:", error);
        addMessage("Failed to process PDF. Please try again.", false);
    }
});

async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let text = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map(item => item.str);
        text += strings.join(' ') + '\n';
    }

    return text;
}

async function analyzePDF(text) {
    try {
        addMessage("Analyzing PDF content...", false);
        
        // First summarize the document
        const summaryPrompt = `Please summarize this document in 3-5 key points:\n\n${text.substring(0, 10000)}`;
        const summary = await generateResponse(summaryPrompt);
        addMessage(cleanMarkdown(summary), false);
        
        // Then identify key topics
        const topicsPrompt = `Identify the main topics or themes in this document:\n\n${text.substring(0, 10000)}`;
        const topics = await generateResponse(topicsPrompt);
        addMessage(cleanMarkdown(topics), false);
        
        // Suggest questions the user might ask
        const questionsPrompt = `Based on this document, suggest 3-5 questions a user might ask about its content:\n\n${text.substring(0, 10000)}`;
        const questions = await generateResponse(questionsPrompt);
        addMessage(cleanMarkdown(questions), false);
        
    } catch (error) {
        console.error("Analysis Error:", error);
        addMessage("Error analyzing PDF content.", false);
    }
}

async function generateResponse(prompt) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            }),
            mode: "cors"
        });

        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
    } catch (error) {
        console.error("Chatbot Error:", error);
        return "An error occurred while processing your request.";
    }
}

function cleanMarkdown(text) {
    return text.replace(/#{1,6}\s?/g, '').replace(/\*\*/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageElement.append(profileImage, messageContent);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage, true);
    userInput.value = '';
    sendButton.disabled = true;

    try {
        const botMessage = await generateResponse(userMessage);
        addMessage(cleanMarkdown(botMessage), false);
    } catch (error) {
        addMessage("Sorry, I encountered an error. Please try again.", false);
    } finally {
        sendButton.disabled = false;
        userInput.focus();
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});