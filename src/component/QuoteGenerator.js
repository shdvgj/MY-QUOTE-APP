import React, { useState, useEffect } from 'react';
import quotes from './quotes.json'; // 引入 JSON 数据
import TwitterShareButton from './TwitterShareButton';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    setCurrentQuote(quote.quote);
    setCurrentAuthor(quote.author);
    setBackgroundColor(`#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`);
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div id="quote-box" className="quote-container" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <p id="text" className="quote-text">{currentQuote}</p>
        <p id="author" className="quote-text">{currentAuthor}</p>
        <div className="buttons-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <TwitterShareButton id="tweet-quote" text={currentQuote} />
          <button id="new-quote" onClick={generateQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;