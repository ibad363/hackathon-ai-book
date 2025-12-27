import React, { useState } from 'react';
import styles from './FloatingChatButton.module.css';

// const API_URL = 'http://127.0.0.1:8000/chat'; // Replace with your backend URL
const API_URL = 'https://ai-book-backend-4f6e.onrender.com/chat';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = { role: 'user', content: message.trim() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessage('');
      setIsLoading(true);

      try {
        const body = new URLSearchParams();
        body.append('query', userMessage.content);

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Failed to get response from AI.');
        }

        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.answer }]);

      } catch (err: any) {
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: `Error: ${err.message}` }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <button className={styles.chatButton} onClick={toggleChat}>
        <span>&#128172;</span>
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Chat with our AI</h3>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className={styles.messageDisplay}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.role]}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.assistant}`}>
                Thinking...
              </div>
            )}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <button className={styles.sendButton} onClick={handleSendMessage} disabled={isLoading || !message.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
