import React, { useState, useRef } from 'react';
import './BirthDay.css';
import audioFile from './nanna_nuvvu_na_pranam.mp3';
import img1 from './OIP.jpg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
      <img src={img1} alt=' ' align="right" height= {"250px"} /> 
        <div className='wish'>
        <p>
          Dear Dad,
        </p>
        <p>
          On this special day, I want to let you know how much you mean to me. Your love, guidance, and support have shaped me into the person I am today. Thank you for always being there, through thick and thin. You are my hero and my role model.
        </p>
        <p>
          With lots of love,
        </p>
        <p>
          Sri Charan
        </p>
        </div>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
