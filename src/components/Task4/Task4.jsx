import React, { useEffect, useState } from 'react';
import './Task4.css';

const Task4 = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const boxSize = 62; 
    const cols = Math.ceil(window.innerWidth / boxSize);
    const rows = Math.ceil(window.innerHeight / boxSize);
    const total = cols * rows;

    const blinkingBoxes = Array.from({ length: total }).map(() => ({
      blink: Math.random() < 0.1,
      delay: Math.random() * 5,
    }));

    setBoxes({ cols, rows, blinkingBoxes });
  }, []);

  const { cols = 0, rows = 0, blinkingBoxes = [] } = boxes;

  return (
    <div
      className="task4-grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 60px)`,
        gridTemplateRows: `repeat(${rows}, 60px)`,
      }}
    >
      {blinkingBoxes.map((box, index) => (
        <div
          key={index}
          className={`box ${box.blink ? 'blink' : ''}`}
          style={box.blink ? { animationDelay: `${box.delay}s` } : {}}
        ></div>
      ))}
    </div>
  );
};

export default Task4;
