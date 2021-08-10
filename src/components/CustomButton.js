import React, { useState, useEffect } from 'react';
import { is_mobile } from '../helpers/utils';

const CustomButton = ({ textButton, handleClick, option }) => {
  const [hovered, updateHovered] = useState(false);
  const [buttonClass, updateButtonClass] = useState('button is-primary');
  const [isMobile, updateIsMobile] = useState(is_mobile);

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile(is_mobile);
    updateButtonClass('button ' + (isMobile ? 'is-fullwidth' : '') + (hovered ? ' is-link' : ' is-primary'));
    return () => window.removeEventListener('resize', updateIsMobile);
  }, [hovered, isMobile]);

  const handleMouseEvents = () => updateHovered(!hovered);

  return (
    <div className="column is-one-fifth is-full-mobile">
      <button
        className={buttonClass}
        key={option}
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEvents}
        onMouseLeave={handleMouseEvents}>
        {textButton}
      </button>
    </div >
  )
};

export default CustomButton;