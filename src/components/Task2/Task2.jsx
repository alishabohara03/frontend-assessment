
import React, { useState } from 'react';
import './Task2.css';

import Thinking from '../../assets/thinking.png';
import Boy from '../../assets/boy.png';
import Girl from '../../assets/girl.png';
import Property4 from '../../assets/rename.png';
import Image1 from '../../assets/image_1.png';
import Image2 from '../../assets/image_2.png';
import Image3 from '../../assets/image_3.png';

const Task2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
  });

  const imageSequences = {
    card1: [Thinking, Image3],
    card2: [Boy, Image1, Image2],
    card3: [Girl],
    card4: [Property4],
  };

  const handleImageCycle = (card) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [card]: (prev[card] + 1) % imageSequences[card].length,
    }));
  };

  return (
    <div className="container">
      <div className="header-section">
        <h1 className="main-title">Your SkillShikshya Journey</h1>
        <p className="tagline">
          <span className="green-text">Step</span> In.{' '}
          <span className="green-text">Skill</span> Up.{' '}
          <span className="green-text">Stand</span> Out. 
        </p>
      </div>

      <div className="card-scroll-container">
        <div className="card-grid">
          {/* === Card 1 === */}
          <div
            className={`custom-card card-1 ${currentImageIndex.card1 > 0 ? 'active' : ''}`}
            onClick={() => handleImageCycle('card1')}
          >
            <img
              src={imageSequences.card1[currentImageIndex.card1]}
              className="card-image"
              alt="Start with Clarity"
            />
            <div className="card-left">
              <h2 className="card-title">Start with Clarity</h2>
              <h4 className="card-subtitle">Step into a better learning path.</h4>
              <p className="card-text">
                Overwhelmed by too many learning options? SkillShikshya provides a clear,
                curated roadmap from the start. Whether you're a beginner or upskilling,
                we have a path tailored to your growth.
              </p>
            </div>
          </div>

          {/* === Card 2 === */}
          <div
            className={`custom-card card-2 ${currentImageIndex.card2 > 0 ? 'active' : ''}`}
            onClick={() => handleImageCycle('card2')}
          >
            <img
              src={imageSequences.card2[currentImageIndex.card2]}
              className="card-image"
              alt="Learn by Doing"
            />
            <div className="card-left">
              <h2 className="card-title">Learn by Doing</h2>
              <h4 className="card-subtitle">Practical skills, real projects.</h4>
              <p className="card-text">
                Theory is great, but action is better. At SkillShikshya, you learn by doing.
                Hands-on projects and real-world scenarios help you build, break, and
                create—leading to true mastery.
              </p>
            </div>
          </div>

          {/* === Card 3 === */}
          <div
            className={`custom-card card-3 ${currentImageIndex.card3 > 0 ? 'active' : ''}`}
            onClick={() => handleImageCycle('card3')}
          >
            <img
              src={imageSequences.card3[currentImageIndex.card3]}
              className="card-image"
              alt="Get Mentored & Supported"
            />
            <div className="card-left">
              <h2 className="card-title">Get Mentored & Supported</h2>
              <h4 className="card-subtitle">You're not learning alone.</h4>
              <p className="card-text">
                Stuck or need feedback? SkillShikshya's community of mentors and learners
                has your back with live support, interactive discussions, and expert
                insights.
              </p>
            </div>
          </div>

          {/* === Card 4 === */}
          <div
            className={`custom-card card-4 ${currentImageIndex.card4 > 0 ? 'active' : ''}`}
            onClick={() => handleImageCycle('card4')}
          >
            <img
              src={imageSequences.card4[currentImageIndex.card4]}
              className="card-image"
              alt="Achieve & Showcase"
            />
            <div className="card-left">
              <h2 className="card-title">Achieve & Showcase</h2>
              <h4 className="card-subtitle">Build your portfolio, get job-ready.</h4>
              <p className="card-text">
                Your journey ends with achievement. Each completed project builds a
                portfolio showcasing your skills and job readiness—bringing you closer to
                that dream job, promotion, or your own venture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;