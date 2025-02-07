import React, { useEffect, useState } from "react";
import styles from './Card.module.css';



function Card({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

console.log(card);


  return (
    <div className={styles.cardGrid}>
      <img 
        className={`${styles.imgFront} ${flipped ? styles.flipped : ''}`}
        src={`/img/${card.src}`} 
        alt={card.alt} 
      />
      <img
        className={styles.imgBack}
        src="/img/front.svg"
        alt="Memory Card"
        onClick={handleClick}
        disabled={disabled}
      />
    </div>
  );
}

export default Card;
