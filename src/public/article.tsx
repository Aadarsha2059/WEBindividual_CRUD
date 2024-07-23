import React from 'react';
import '../assets/css/article.css';

const articles = [
  {
    title: "The Power of Reading: A Global Perspective",
    author: "Aiko Tanaka, Tokyo, Japan",
    date: "June 15, 2024",
    source: "Tokyo Literary Journal",
    content: "Reading isn’t just a pastime in Japan; it’s a way of life. From ancient literature to modern novels, the act of reading promotes cognitive development and stress relief. Embracing a reading culture can profoundly impact one's personal and professional growth, as seen in Japan's rich literary history and its modern-day reading habits."
  },
  {
    title: "Study Habits of Successful Students in Finland",
    author: "Jari Mäkinen, Helsinki, Finland",
    date: "May 22, 2024",
    source: "Finnish Education Review",
    content: "In Finland, education is highly valued, and so are effective study habits. Finnish students often use a balanced approach, integrating both independent study and collaborative learning. Emphasizing quality over quantity, they focus on understanding concepts deeply rather than rote memorization, a method that contributes to their high academic performance."
  },
  {
    title: "The Role of Reading in Indian Education",
    author: "Priya Sharma, New Delhi, India",
    date: "July 8, 2024",
    source: "Indian Education Times",
    content: "In India, reading is seen as a gateway to knowledge and empowerment. The diverse range of books available in multiple languages helps students from various backgrounds. Building a habit of reading, combined with disciplined study routines, is essential for success in India's competitive educational environment, promoting both academic excellence and personal growth."
  },
  {
    title: "Reading as a Tool for Study Enhancement in Brazil",
    author: "Carlos Oliveira, São Paulo, Brazil",
    date: "April 12, 2024",
    source: "Brazilian Academic Review",
    content: "In Brazil, students are increasingly recognizing the benefits of integrating reading into their study routines. Whether it's through fiction or non-fiction, reading enhances comprehension and critical thinking skills. Brazilian educators encourage students to develop a habit of reading to support their academic endeavors and broaden their horizons, reflecting a growing trend toward holistic education."
  },
  {
    title: "The Impact of Reading on Study Efficiency: A South African View",
    author: "Naledi Mokoena, Johannesburg, South Africa",
    date: "August 19, 2024",
    source: "South African Scholar",
    content: "In South Africa, reading is more than just an academic exercise; it’s a way to enhance study efficiency. Students are encouraged to read widely and diversely to develop analytical skills and a broader perspective. Incorporating regular reading into study habits helps improve focus and retention, making learning more effective and enjoyable."
  }
];

const Article: React.FC = () => {
  return (
    <div className="articles-container">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-author">{article.author}</p>
          <p className="article-date">{article.date}</p>
          <p className="article-source">{article.source}</p>
          <p className="article-content">{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;
