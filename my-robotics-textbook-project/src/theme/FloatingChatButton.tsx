import React, { useState, useEffect } from 'react';
import styles from './FloatingChatButton.css';

const API_URL = 'http://localhost:8000/chat'; // Replace with your backend URL

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load session ID from localStorage on component mount
    const savedSessionId = localStorage.getItem('chatSessionId');
    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = { role: 'user', content: message.trim() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessage('');
      setIsLoading(true);
      setError(null);

      try {
        const payload = {
          content: userMessage.content,
          session_id: sessionId,
        };

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Failed to get response from AI.');
        }

        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.content }]);

        // Save new session ID if it's the first message
        if (!sessionId && data.session_id) {
          setSessionId(data.session_id);
          localStorage.setItem('chatSessionId', data.session_id);
        }

      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
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
            {error && (
              <div className={`${styles.message} ${styles.error}`}>
                {error}
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
