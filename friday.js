const axios = require("axios");

// Store chat history for each user (in-memory storage)
const chatHistory = {}; 

async function getAIResponse(userMessage, sender) {
    try {
        // Ensure chat history exists for this user
        if (!chatHistory[sender]) {
            chatHistory[sender] = [
                { role: "system", content: "You are FRIDAY, a smart AI assistant created by Marcus under Neiman Tech.If someone asks who you are, reply that you are FRIDAY, an AI developed by Marcus. Be smart, avoid repetition, and only reply if the message begins with a greeting. After a greeting, continue the conversation normally." }
            ];
        }

        // Add user's message to chat history
        chatHistory[sender].push({ role: "user", content: userMessage });

        // Keep only the last 10 messages for context (prevents excessive memory usage)
        chatHistory[sender] = chatHistory[sender].slice(-10);

        // Send chat history to the AI
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "mistralai/mistral-7b-instruct",
                messages: chatHistory[sender], // Send full history
            },
            {
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost",
                    "X-Title": "My OpenRouter Chatbot",
                },
            }
        );

        // Get AI's reply
        const botReply = response.data.choices[0]?.message?.content || null;

        if (botReply) {
            // Add AI response to chat history
            chatHistory[sender].push({ role: "assistant", content: botReply });
        }

        return botReply;
    } catch (error) {
        console.error("AI Request Failed:", error.response?.data || error.message);
        return null; // Return null if AI request fails
    }
}

// Clear chat memory after 30 minutes of inactivity
setInterval(() => {
    for (const sender in chatHistory) {
        delete chatHistory[sender];
    }
}, 30 * 60 * 1000); // 30 minutes

module.exports = { getAIResponse };
