import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Function to handle recommendations
  const handleRecommendations = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend', { skills, interests });
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  // Function to handle chatbot messages
  const handleChat = async () => {
    if (!chatInput.trim()) return;

    const newMessage = { sender: 'You', message: chatInput };
    setChatHistory([...chatHistory, newMessage]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/chat', {
        user_id: 'frontend_user', // Unique user ID for tracking conversations
        message: chatInput,
      });

      const botReply = { sender: 'Bot', message: response.data.reply };
      setChatHistory((prevHistory) => [...prevHistory, botReply]);
    } catch (error) {
      console.error('Error with chatbot:', error);
    }

    setChatInput('');
  };

  return (
    <div className="App">
      {/* Recommendation System */}
      <h1>Recommendation System</h1>
      <input
        type="text"
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <input
        type="text"
        placeholder="Interests"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />
      <button onClick={handleRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec.name} (Score: {rec.similarity_score.toFixed(2)})</li>
        ))}
      </ul>

      {/* Chatbot */}
      <h1>Chat with the Bot</h1>
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === 'You' ? 'user-message' : 'bot-message'}`}
            >
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleChat()} // Send message on Enter key
        />
        <button onClick={handleChat}>Send</button>
      </div>
    </div>
  );
}

export default App;
