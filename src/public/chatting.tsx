import React, { useState } from "react";
import "../assets/css/chatting.css";
import nirajan from "../assets/images/nirajan.png";
import bisnu from "../assets/images/bisnhu.png.jpeg";
import suraj from "../assets/images/suraj.png";
import anuj from "../assets/images/anuj.png";
import aadarsha from "../assets/images/aadarsha.png.jpg";

interface Message {
  content: string;
  timestamp: string;
  sender: "user" | "contact";
}

interface Contact {
  name: string;
  avatar: string;
  message: string;
  isOnline: boolean;  
}

const contacts: Contact[] = [
  { name: "Adarsha", avatar: aadarsha, message: "Hey, Adarsha!", isOnline: true },
  { name: "Bishnu", avatar: bisnu, message: "Hello, Bishnu! How are you?", isOnline: true },
  { name: "Nirajan", avatar: nirajan, message: "Hello, Nirajan!", isOnline: false },
  { name: "Suraj", avatar: suraj, message: "Hi, Suraj!", isOnline: true },
  { name: "Anuj", avatar: anuj, message: "Hello, Anuj!", isOnline: false },
];

const ChatApp: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [chatHistories, setChatHistories] = useState<{ [key: string]: Message[] }>({});
  const [messageInput, setMessageInput] = useState<string>("");

  const formatTimestamp = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const switchChat = (contactName: string) => {
    setActiveChat(contactName);
    if (!chatHistories[contactName]) {
      setChatHistories((prev) => ({ ...prev, [contactName]: [] }));
    }
  };

  const addMessage = (content: string) => {
    if (!content.trim() || !activeChat) return;

    const newMessage: Message = {
      content,
      timestamp: formatTimestamp(new Date()),
      sender: "user", // Assuming the user is sending the message
    };

    setChatHistories((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage],
    }));

    setMessageInput("");

    // Simulate a reply from the contact
    setTimeout(() => {
      const replyMessage: Message = {
        content: `Hi, I am ${activeChat}. I need your goods for Stu-Thrift.`,
        timestamp: formatTimestamp(new Date()),
        sender: "contact", // The contact's reply
      };
      setChatHistories((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), replyMessage],
      }));
    }, 1500);
  };

  const deleteMessage = (index: number) => {
    if (!activeChat) return;

    setChatHistories((prev) => {
      const updatedMessages = [...(prev[activeChat] || [])];
      updatedMessages.splice(index, 1);

      return { ...prev, [activeChat]: updatedMessages };
    });
  };

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <div className="sidebar">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className={`contact ${activeChat === contact.name ? "active" : ""}`}
            onClick={() => switchChat(contact.name)}
          >
            <img src={contact.avatar} alt={contact.name} />
            <div className="details">
              <h4>{contact.name}</h4>
              <p>{contact.message}</p>
            </div>
            {/* Green Dot for Online Status */}
            <div className={`status-dot ${contact.isOnline ? "online" : "offline"}`}></div>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="chat">
        <div className="header">
          {activeChat ? (
            <>
              <img
                src={contacts.find((contact) => contact.name === activeChat)?.avatar}
                alt={activeChat}
              />
              <div>
                <h3 className="profile-name">{activeChat}</h3>
                <p className="status">{contacts.find((contact) => contact.name === activeChat)?.isOnline ? "Online" : "Offline"}</p>
              </div>
            </>
          ) : (
            <h3>STU-THRIFT CHAT PAGE</h3>
          )}
        </div>

        {/* Messages */}
        <div className="messages">
          {(chatHistories[activeChat || ""] || []).map(({ content, timestamp, sender }, index) => (
            <div key={index} className={`message ${sender === "user" ? "sent" : "received"}`}>
              <p>{content}</p>
              <span className="timestamp">{timestamp}</span>
              <button
                className="delete-button"
                onClick={() => deleteMessage(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") addMessage(messageInput);
            }}
          />
          <button onClick={() => addMessage(messageInput)}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
