import React, { useState } from 'react';
import '../assets/css/chatbot.css';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [isThinking, setIsThinking] = useState<boolean>(false);

    interface Message {
        text: string;
        isUser: boolean;
    }

    const askQuestion = () => {
        const userInput = inputValue.toLowerCase();
        let botResponse = "";

        switch (userInput) {
            case "who developed you?":
                botResponse = "My supreme creator Aadarsha Babu Dhakal developed me.";
                break;
            case "can you provide me your source code?":
                botResponse = "No, I cannot do this. My developer would be sad and I can't see him being sad. He is my creator and I respect his order.";
                break;
            case "in which year aadarsha developed you?":
                botResponse = "He structured me in 2024 AD.";
                break;
            case "what is the motive of your website?":
                botResponse = "The motive is to facilitate book donation and sharing among users.";
                break;
            case "how many donors are there?":
                botResponse = "There are currently 23 donors.";
                break;
            case "how many seekers are there?":
                botResponse = "There are currently 15 seekers.";
                break;
            case "how many books are currently available to seek?":
                botResponse = "There are currently 10 books available to seek.";
                break;
            case "what are the categories of books available?":
                botResponse = "We have categories such as Fiction, Non-fiction, Literature, Biography, Science Fiction, and more.";
                break;
            case "how can i donate books?":
                botResponse = "You can donate books by logging into your account and accessing the donate section.";
                break;
            case "how can i seek books?":
                botResponse = "You can seek books by logging into your account and accessing the seek section.";
                break;
            case "who is aadarsha babu dhakal?":
                botResponse = "Aadarsha Babu Dhakal is one of the passionate students of Softwarica College of IT and E-commerce, dreaming to become a software engineer. I'm the product of his brilliant mind.";
                break;
            case "what is the age of your developer?":
                botResponse = "The age of my developer is 22 years old.";
                break;
            case "is your website free to use now?":
                botResponse = "Yes, for now we are completely free for users.";
                break;
            default:
                botResponse = "I'm sorry, I don't understand that question.";
        }

        const newMessage: Message = { text: userInput, isUser: true };
        const thinkingMessage: Message = { text: "🤔 Thinking...........", isUser: false };

        setMessages([...messages, newMessage, thinkingMessage]);
        setIsThinking(true);
        setInputValue('');

        setTimeout(() => {
            setMessages(prevMessages => {
                return prevMessages.slice(0, prevMessages.length - 1).concat({ text: botResponse, isUser: false });
            });
            setIsThinking(false);
        }, 4000); 
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                Book Donors Nepal Chat Bot
            </div>
            <div className="chat-box" id="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.isUser ? 'user-message' : 'bot-message'}`}>
                        <span className={message.isUser ? 'user' : 'bot'}>
                            {message.isUser ? 'User:' : 'Book Donors Nepal Bot:'}
                        </span>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    id="user-input"
                    placeholder="Ask a question..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isThinking}
                />
                <button onClick={askQuestion} disabled={isThinking}>Send</button>
            </div>
            <div className="chat-footer">
                All rights on Aadarsha Babu Dhakal
            </div>
        </div>
    );
};

export default Chatbot;
