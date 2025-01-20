import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { createChatBotMessage } from 'react-chatbot-kit'; // Import createChatBotMessage
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = ({ getRecommendations }) => {
  // Create instances of MessageParser and ActionProvider
  const actionProvider = new ActionProvider(
    createChatBotMessage, // Pass createChatBotMessage directly
    (newState) => {
      // This callback will be used to update the chatbot's state
      console.log('Updating state:', newState);
    },
    { getRecommendations }
  );
  const messageParser = new MessageParser(actionProvider);

  return (
    <div>
      <Chatbot
        config={config}
        messageParser={messageParser}
        actionProvider={actionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;