import React from 'react';
import '../assets/css/chatbox.css';

// Importing images
import arrow from '../assets/images/arrow.png';
import pp from '../assets/images/pp.png';
import video from '../assets/images/video.png';
import phone from '../assets/images/phone.png';
import more from '../assets/images/more.png';
import emoji1 from '../assets/images/emoji-1.png';
import emoji2 from '../assets/images/emoji-2.png';
import check1 from '../assets/images/check-1.png';
import check2 from '../assets/images/check-2.png';
import post2 from '../assets/images/post2.jpg';
import heart from '../assets/images/heart.png';
import emo from '../assets/images/emo.png';
import attachFile from '../assets/images/attach file.png';
import camera from '../assets/images/camera.png';
import mic from '../assets/images/mic.png';

const ChatBox: React.FC = () => {
  return (
    <div className="container">
      <div className="chat">
        <div className="chat-header">
          <div className="profile">
            <div className="left">
              <img src={arrow} className="arrow" alt="arrow" />
              <img src={pp} className="pp" alt="profile" />
              <h2>Bisnu</h2>
              <span>online</span>
            </div>
            <div className="right">
              <img src={video} className="icon" alt="video" />
              <img src={phone} className="icon" alt="phone" />
              <img src={more} className="icon" alt="more" />
            </div>
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <p>
                <img src={emoji1} className="emoji" alt="emoji" />
                Hi, Bishnu!
              </p>
              <div className="check">
                <span>4:00 PM</span>
                <img src={check2} alt="check" />
              </div>
            </div>
          </div>
          <div className="chat-l">
            <div className="mess">
              <p>
                Oh! hi <img src={emoji2} className="emoji" alt="emoji" />
              </p>
              <div className="check">
                <span>4:00 PM</span>
              </div>
            </div>
            <div className="sp"></div>
          </div>

          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <p>Do you need any help for assignments? I can do it for minimum cost</p>
              <div className="check">
                <span>4:00 PM</span>
                <img src={check2} alt="check" />
              </div>
            </div>
          </div>
          <div className="chat-l">
            <div className="mess">
              <p>Ohh I see! Its assignment of DSA. Can you do it perfectly?</p>
              <div className="check">
                <span>4:00 PM</span>
              </div>
            </div>
            <div className="sp"></div>
          </div>

          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <p>ummmmm. I think I can.</p>
              <div className="check">
                <span>4:00 PM</span>
                <img src={check2} alt="check" />
              </div>
            </div>
          </div>
          <div className="chat-l">
            <div className="mess">
              <p>Okay I will send you the attachments and please provide me your location address.?</p>
              <div className="check">
                <span>4:00 PM</span>
              </div>
            </div>
            <div className="sp"></div>
          </div>

          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <img src={post2} className="img_chat" alt="post" />
              <div className="check">
                <span>4:00 PM</span>
                <img src={check2} alt="check" />
              </div>
            </div>
          </div>
          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <p>Ok I will be happy to help you in the coming days too.</p>
              <div className="check">
                <span>4:00 PM</span>
                <img src={check2} alt="check" />
              </div>
            </div>
          </div>
          <div className="chat-l">
            <div className="mess">
              <p>
                Me too. <img src={heart} className="emoji" alt="heart" />
              </p>
              <div className="check">
                <span>4:00 PM</span>
              </div>
            </div>
            <div className="sp"></div>
          </div>
          <div className="chat-r">
            <div className="sp"></div>
            <div className="mess mess-r">
              <p>So where are you studying now?</p>
              <div className="check">
                <span>4:00 PM</span>
                <img src={check1} alt="check" />
              </div>
            </div>
          </div>
        </div>

        <div className="chat-footer">
          <img src={emo} className="emo" alt="emoji" />
          <textarea placeholder="Type a message"></textarea>
          <div className="icons">
            <img src={attachFile} alt="attach" />
            <img src={camera} alt="camera" />
          </div>
          <img src={mic} className="mic" alt="mic" />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
