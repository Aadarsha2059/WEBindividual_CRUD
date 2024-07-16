import React, { useState, useEffect } from 'react';
import '../assets/css/chatdonorseeker.css';

interface Message {
    id: number;
    sender: string;
    content: string;
    timestamp: string;
    replyTo?: number;
}

const ChatDonorSeeker: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [user, setUser] = useState<string>('Donor'); // Can be 'Donor' or 'Seeker'
    const [replyTo, setReplyTo] = useState<number | null>(null);

    useEffect(() => {
        // Fetch messages from local storage on initial load
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    useEffect(() => {
        // Save messages to local storage whenever they change
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                sender: user,
                content: input,
                timestamp: new Date().toLocaleTimeString(),
                replyTo: replyTo || undefined
            };
            setMessages([...messages, newMessage]);
            setInput('');
            setReplyTo(null);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Donor-Seeker Chat</h2>
                <button onClick={() => setUser(user === 'Donor' ? 'Seeker' : 'Donor')}>
                    Switch to {user === 'Donor' ? 'Seeker' : 'Donor'}
                </button>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender === user ? 'own-message' : ''}`}>
                        {msg.replyTo && (
                            <div className="reply-context">
                                <span>Replying to: {messages.find(m => m.id === msg.replyTo)?.content}</span>
                            </div>
                        )}
                        <span className="message-sender">{msg.sender === 'Donor' ? '📚 Donor' : '📖 Seeker'}:</span>
                        <span className="message-content">{msg.content}</span>
                        <span className="message-timestamp">{msg.timestamp}</span>
                        <button className="reply-button" onClick={() => setReplyTo(msg.id)}>Reply</button>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                {replyTo && (
                    <div className="replying-to">
                        Replying to: {messages.find(m => m.id === replyTo)?.content}
                        <button onClick={() => setReplyTo(null)}>Cancel</button>
                    </div>
                )}
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type a message..." 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatDonorSeeker;
