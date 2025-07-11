
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import image25 from '../../assets/image_25.png';
import image26 from '../../assets/image_26.png';
import image27 from '../../assets/image_27.png';
import image28 from '../../assets/image_28.png';
import image16 from '../../assets/image_16.png';
import image20 from '../../assets/image_20.png';
import image21 from '../../assets/image_21.png';
import image22 from '../../assets/image_22.png';
import image23 from '../../assets/image_23.png';
import image24 from '../../assets/image_24.png';
import './Task1.css';

const profilesData = [
  { id: 1, image: image16, testimonial: "I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I recommend the same course to my data-enthusiast friends.", author: "John Doe" },
  { id: 2, image: image20, testimonial: "", author: "" },
  { id: 3, image: image21, testimonial: "", author: "" },
  { id: 4, image: image22, testimonial: "", author: "" },
  { id: 5, image: image23, testimonial: "", author: "" },
  { id: 6, image: image24, testimonial: "", author: "" },
];

const floatingIcons = [
  { id: 1, image: image25, position: { angle: 0.5 } },
  { id: 2, image: image26, position: { angle: 1.8 } },
  { id: 3, image: image27, position: { angle: 3.5 } },
  { id: 4, image: image28, position: { angle: 4.8 } },
];

const Task1 = () => {
  const profileRadius = 250;
  const iconRadius = 320;
  const [hoveredProfile, setHoveredProfile] = useState(null);

  const handleHover = (profile) => {
    setHoveredProfile(profile.id === hoveredProfile ? null : profile);
  };

  const handleClickOutside = (e) => {
    if (hoveredProfile && !e.target.closest('.profile-card') && !e.target.closest('.testimonial-box')) {
      setHoveredProfile(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hoveredProfile]);

  return (
    <div className="testimonial-section">
      <div className="content-wrapper">
        <div className="profiles-container">
          {/* Central Text Content */}
          <div className="text-content">
            <h2 className="subheading">Hear How They Level Up Their Game! <Icon icon="mdi:star" className="icon-decoration" /></h2>
            <h1 className="heading">
              Skill <span className="highlight">Masters</span> Unite! <Icon icon="mdi:handshake" className="icon-decoration" />
            </h1>
            <a href="#" className="view-link">View all Testimonials <span className="arrow-icon"><Icon icon="mdi:chevron-right" /></span></a>
          </div>

      
          {profilesData.map((profile, index) => {
            const angle = (index / profilesData.length) * 2 * Math.PI - Math.PI / 2;
            const x = profileRadius * Math.cos(angle);
            const y = profileRadius * Math.sin(angle);

            return (
              <motion.div
                key={profile.id}
                className="profile-card"
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => handleHover(profile)}
                onMouseLeave={() => setHoveredProfile(null)}
              >
                <div className="rating-container">
                  <img
                    src={profile.image}
                    alt={`Profile ${profile.id}`}
                    className="profile-image"
                    id={`image-${profile.id}`}
                  />
                  {(profile.id === 1 || profile.id === 4) && (
                    <div className={`rating rating-${profile.id}`}>
                      {[...Array(5)].map((_, i) => (
                        <Icon icon="mdi:star" key={i} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {floatingIcons.map((iconData, index) => {
            const x = iconRadius * Math.cos(iconData.position.angle);
            const y = iconRadius * Math.sin(iconData.position.angle);

            return (
              <motion.div
                key={iconData.id}
                className="floating-icon"
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6 + index * 0.2,
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                }}
              >
                <img
                  src={iconData.image}
                  alt={`Icon ${iconData.id}`}
                  className="floating-icon-image"
                />
              </motion.div>
            );
          })}
        </div>

        {hoveredProfile && hoveredProfile.id === 1 && (
          <motion.div
            className="testimonial-box"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="testimonial-text">{hoveredProfile.testimonial}</p>
            <div className="author-info">- {hoveredProfile.author}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Task1;