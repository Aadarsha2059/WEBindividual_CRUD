import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/chatdonorseeker.css"; // Chat-specific CSS
// Advertisement-specific CSS
import donorseekerchatvideo from "../assets/images/donorseekerchatvideo.mp4"; // Video file
import shoeImage from "../assets/images/shoe.png"; // Shoe image
import womanImage from "../assets/images/women.png"; // Woman image

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  replyTo?: number;
}

const ChatDonorSeeker: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<string>("Donor"); // Can be 'Donor' or 'Seeker'
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [showAd, setShowAd] = useState<boolean>(true); // Controls visibility of the advertisement

  useEffect(() => {
    // Fetch messages from local storage on initial load
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages: Message[] = JSON.parse(storedMessages);
      const validMessages = parsedMessages.filter((msg) => {
        return (
          new Date().getTime() - new Date(msg.timestamp).getTime() <=
          24 * 60 * 60 * 1000
        );
      });
      setMessages(validMessages);
    }
  }, []);

  useEffect(() => {
    // Save messages to local storage whenever they change
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: user,
        content: input,
        timestamp: new Date().toISOString(),
        replyTo: replyTo || undefined,
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput("");
      setReplyTo(null);
    }
  };

  const handleUserSwitch = () => {
    setUser(user === "Donor" ? "Seeker" : "Donor");
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>BACK</button>
      <div className="chat-container">
        <video className="chat-background-video" autoPlay muted loop>
          <source src={donorseekerchatvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="chat-overlay">
          <div className="chat-header">
            <h2>Donor-Seeker Chat</h2>
            <button
              onClick={handleUserSwitch}
              className={`switch-user-button ${user === "Donor" ? "donor" : "seeker"}`}
            >
              Switch to {user === "Donor" ? "Seeker" : "Donor"}
            </button>
          </div>

         {/* Advertisement Section */}
{showAd && (
  <div className="advertisement-container">
    <div className="advertisement">
      <button
        className="close-ad-button"
        onClick={() => setShowAd(false)}
      >
        &times;
      </button>
      <div className="shoe">
        <img src={shoeImage} alt="Shoe" />
      </div>
      <div className="content">
        <span>upto</span>
        <h3>50% off</h3>
        <p>offer ends after 5 days</p>
        <p className="ad-text">We are offering renowned branded shoes at a 50% discount for the festival Dashain 2081.</p>
        <p className="ad-text">Shop Name: Bishnu Jutta Pasal, opposite Softwarica College Block A.</p>
        <a href="#" className="btn">view offer</a>
      </div>
      <div className="women">
        <img src={womanImage} alt="Woman" />
      </div>
    </div>
  </div>
)}

          {/* End of Advertisement Section */}

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === user ? "own-message" : ""}`}
              >
                {msg.replyTo && (
                  <div className="reply-context">
                    <span>
                      Replying to: {messages.find((m) => m.id === msg.replyTo)?.content}
                    </span>
                  </div>
                )}
                <span className="message-sender">
                  {msg.sender === "Donor" ? "📚 Donor" : "📖 Seeker"}:
                </span>
                <span className="message-content">{msg.content}</span>
                <span className="message-timestamp">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
                <button
                  className="reply-button"
                  onClick={() => setReplyTo(msg.id)}
                >
                  Reply
                </button>
              </div>
            ))}
          </div>
          <div className="chat-input">
            {replyTo && (
              <div className="replying-to">
                Replying to: {messages.find((m) => m.id === replyTo)?.content}
                <button onClick={() => setReplyTo(null)}>Cancel</button>
              </div>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatDonorSeeker;
