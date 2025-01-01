// src/public/auctiongame.tsx
import React, { useState } from 'react';
import './auctiongame.css';
import { bidItems, auctionParticipants } from './constants';

interface Bid {
  bid: number;
  user: string;
}

const AuctionGame = () => {
  const [item, setItem] = useState<number | null>(null);
  const [highestBid, setHighestBid] = useState<Bid>({ bid: 0, user: '' });
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [bids, setBids] = useState<Bid[]>([]);
  const [isWinnerDeclared, setIsWinnerDeclared] = useState(false);

  const handleStartAuction = (selectedItem: number) => {
    setItem(selectedItem);
    setIsAuctionStarted(true);
    setSelectedUser(null);
    setBids([]);
    setIsWinnerDeclared(false);
  };

  const rotateNeedle = () => {
    const randomIndex = Math.floor(Math.random() * auctionParticipants.length);
    setSelectedUser(auctionParticipants[randomIndex].name);
  };

  const placeBid = (bidAmount: number) => {
    if (bidAmount <= highestBid.bid) {
      alert('Your bid must be higher than the current highest bid.');
      return;
    }

    setBids([...bids, { bid: bidAmount, user: 'You' }]); // Replace 'You' with the actual user
    setHighestBid({ bid: bidAmount, user: 'You' });
  };

  const declareWinner = () => {
    const winner = bids.reduce((prev, current) => (prev.bid > current.bid ? prev : current), { bid: 0, user: '' });
    setHighestBid(winner);
    setIsWinnerDeclared(true);
  };

  const playAgain = () => {
    setIsAuctionStarted(false);
    setIsWinnerDeclared(false);
    setBids([]);
  };

  return (
    <div className="auction-container">
      <h2 className="auction-header">Auction Game</h2>

      {!isAuctionStarted && (
        <div className="choose-book">
          <h3>Select a Book to Auction</h3>
          <div className="book-list">
            {bidItems.map((book, index) => (
              <div
                key={book.id}
                className={`book-item ${item === index ? 'selected' : ''}`}
                onClick={() => handleStartAuction(index)}
              >
                <img src={book.link} alt={`Book ${index + 1}`} />
                <p>{book.description}</p>
                <p>Starting Bid: NRS {book.startingBid}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {isAuctionStarted && item !== null && !isWinnerDeclared && (
        <div className="auction-item">
          <img src={bidItems[item].link} alt={`Auction Item ${item + 1}`} />
          <div className="auction-item-details">
            <h3>{bidItems[item].description}</h3>
            <p>Starting Bid: NRS {bidItems[item].startingBid}</p>
            <p>Current Bid: NRS {highestBid.bid}</p>
            <p>Highest Bidder: {highestBid.user || 'None'}</p>
          </div>

          <div className="rotate-needle">
            <button onClick={rotateNeedle} className="rotate-btn">Spin the Needle</button>
            {selectedUser && <h4>Lucky User: {selectedUser}</h4>}
          </div>

          <div className="bid-buttons">
            <button onClick={() => placeBid(highestBid.bid + 10)}>Bid NRS {highestBid.bid + 10}</button>
            <button onClick={() => placeBid(highestBid.bid + 20)}>Bid NRS {highestBid.bid + 20}</button>
          </div>

          <div className="sample-bids">
            <h4>Sample Bids</h4>
            {auctionParticipants.map((participant, index) => (
              <div key={index} className="sample-bid">
                <p>{participant.name}: NRS {highestBid.bid + (index + 1) * 10}</p>
              </div>
            ))}
          </div>

          <div className="auction-footer">
            <button onClick={declareWinner} className="declare-winner-btn">Declare Winner</button>
          </div>
        </div>
      )}

      {isWinnerDeclared && (
        <div className="winner-declared">
          <h3>Winner: {highestBid.user} with a bid of NRS {highestBid.bid}</h3>
          <button onClick={playAgain} className="play-again-btn">Play Again</button>
        </div>
      )}
    </div>
  );
};

export default AuctionGame;
