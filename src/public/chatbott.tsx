import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/chatbott.css';
import BOT_IMG from '../assets/images/chatbot.jpeg';
import PERSON_IMG from '../assets/images/user.jpeg';

const ChatBott: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<JSX.Element[]>([]);
  const [isThinking, setIsThinking] = useState(false); // State for thinking animation
  const msgerInputRef = useRef<HTMLInputElement>(null);
  const msgerChatRef = useRef<HTMLDivElement>(null);

  const PERSON_NAME = "USER QUESTION";
  const BOT_NAME = "CHAT-BOT";

  const questions = [
    "What is Stu Thrift?",
    "How can I donate goods?",
    "How can I sell items?",
    "How can I buy items?",
    "What items can I donate?",
    "How do I become a seeker?",
    "How do I become a seller?",
    "What are the benefits of using Stu Thrift?",
    "Is Stu Thrift available in all regions?",
    "Can I contact a seller directly?",
    "How does Stu Thrift ensure fair pricing?",
    "What is the payment process?",
    "Is there a return policy?",
    "Can I track my donation or purchase?",
    "How do I report issues or fraud?",
    "Can I donate books or educational materials?",
    "Can I donate second-hand clothes?",
    "Can I donate electronic items?",
    "How can I search for items?",
    "How can I get notified about new donations?",
    "Can I leave reviews for items or sellers?",
    "Is my personal information safe on Stu Thrift?",
    "How do I contact Stu Thrift support?",
    "Can I donate or buy items anonymously?",
    "Is there a minimum price for donated items?",
    "Can I donate multiple items at once?",
    "How do I cancel a transaction?",
    "Is there a mobile app for Stu Thrift?",
    "Can I donate furniture?"
  ];

  const replies: string[] = [
    "Stu Thrift is a platform where students can donate, sell, or buy second-hand goods.",
    "To donate goods, you simply list the item on the platform and specify if it's free or priced.",
    "You can sell items by creating a listing with details and images on the Stu Thrift website.",
    "To buy items, browse through the listings or use search filters to find what you're looking for.",
    "You can donate books, clothes, electronics, furniture, and more. Check the donation guidelines for specifics.",
    "To become a seeker, sign up on the platform and start browsing listings for items you're interested in.",
    "Becoming a seller is easy—just sign up and create listings for items you want to sell or donate.",
    "Stu Thrift helps students find affordable, second-hand goods while contributing to a sustainable community.",
    "Stu Thrift is available in multiple regions, but availability may vary by location. Check the platform for updates.",
    "Yes, you can contact a seller directly through the platform messaging system after making a connection.",
    "We aim to ensure fair pricing by offering a transparent platform where sellers set their own prices.",
    "Once an item is sold, payments are processed securely through the platform. Payment options vary.",
    "Stu Thrift offers a basic return policy that allows for returns under certain conditions. Refer to the guidelines.",
    "You can track donations and purchases through your dashboard once the transaction is completed.",
    "If you encounter any issues or fraud, please report it to Stu Thrift support immediately.",
    "Yes, you can donate books and other educational materials through the platform.",
    "You can donate second-hand clothes and other clothing items following the platform’s donation guidelines.",
    "We accept a variety of electronic items for donation or sale, such as phones, laptops, etc.",
    "You can search for items through the search bar or browse by category and filters on the platform.",
    "To get notified about new donations, sign up for email notifications or enable push notifications.",
    "Yes, you can leave reviews for items or sellers based on your experience with the transaction.",
    "Stu Thrift uses secure encryption to protect your personal information and transaction details.",
    "For support, contact us through the 'Help' section or via email.",
    "You can choose to donate or buy items anonymously by opting for privacy settings in your account.",
    "There is no minimum price for donated items. Items can be listed for free or at any price.",
    "Yes, you can donate multiple items at once. Just create a listing for each item you wish to donate.",
    "To cancel a transaction, contact the other party through the platform’s messaging system.",
    "Stu Thrift does not currently have a mobile app, but the website is fully optimized for mobile use.",
    "Yes, you can donate furniture or other large items following the platform’s donation guidelines."
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
    if (msgerInputRef.current) {
      msgerInputRef.current.value = questions[currentQuestionIndex]; // Set default question in the input box
    }
  }, [currentQuestionIndex]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const msgText = msgerInputRef.current?.value;

    if (!msgText) return;

    msgerInputRef.current.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    setIsThinking(true); // Start thinking state
    setTimeout(() => output(msgText), 3000); // Adding delay to simulate "thinking"
  };

  const output = (input: string) => {
    let response = "";
    const text = input.toLowerCase().trim();

    if (text === questions[currentQuestionIndex].toLowerCase()) {
      response = replies[currentQuestionIndex];
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // Loop questions
    } else {
      response = "I didn't quite understand that. Could you rephrase?";
    }

    setTimeout(() => {
      addChat(BOT_NAME, BOT_IMG, "left", response);
      setIsThinking(false); // End thinking state
    }, 1500);
  };

  const addChat = (name: string, img: string, side: string, text: string) => {
    const msgHTML = (
      <div className={`msg ${side}-msg`} key={Date.now()}>
        <div className="msg-img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="msg-bubble">
          <div className="msg-info">
            <div className="msg-info-name">{name}</div>
            <div className="msg-info-time">{formatDate(new Date())}</div>
          </div>
          <div className="msg-text">{text}</div>
        </div>
      </div>
    );

    setChatMessages((prevMessages) => [...prevMessages, msgHTML]);

    if (msgerChatRef.current) {
      msgerChatRef.current.scrollTop = msgerChatRef.current.scrollHeight;
    }
  };

  const formatDate = (date: Date) => {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  };

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="bx bxs-chat" style={{ color: '#fff', fontSize: '24px', marginRight: '8px' }}></i> ChatBot - Stu Thrift Help
        </div>
      </header>
      <main className="msger-chat" ref={msgerChatRef}>
        {chatMessages}
        {isThinking && (
          <div className="msg left-msg">
            <div className="msg-img" style={{ backgroundImage: `url(${BOT_IMG})` }}></div>
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{BOT_NAME}</div>
                <div className="msg-info-time">{formatDate(new Date())}</div>
              </div>
              <div className="msg-text">
                <i className="bx bx-loader-alt bx-spin" style={{ fontSize: '24px' }}></i> Thinking...
              </div>
            </div>
          </div>
        )}
      </main>
      <form className="msger-inputarea" onSubmit={handleSubmit}>
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your question..."
          ref={msgerInputRef}
        />
        <button type="submit" className="msger-send-btn">
          <i className='bx bx-send' style={{ fontSize: '20px' }}></i>
        </button>
      </form>
    </section>
  );
};

export default ChatBott;
