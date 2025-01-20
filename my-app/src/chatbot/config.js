import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "AI Assistant",
  initialMessages: [
    createChatBotMessage("Hi! I'm here to help you. What are your skills?"),
  ],
};

export default config;