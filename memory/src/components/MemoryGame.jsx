import { useState, useEffect } from "react";
import cardData from "../cards";
import Card from "./Card";
import styles from "./MemoryGame.module.css";


function MemoryGame() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [clickedCard1, setClickedCard1] = useState(null);
  const [clickedCard2, setClickedCard2] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const memoryCards = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(memoryCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    clickedCard1 ? setClickedCard2(card) : setClickedCard1(card);
  };

  // compare two cards
  useEffect(() => {
    if (clickedCard1 && clickedCard2) {
      setDisabled(true);
      if (clickedCard1.src === clickedCard2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === clickedCard1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 2000);
      }
    }
  }, [clickedCard1, clickedCard2]);

  const resetTurn = () => {
    console.log("reset");
    setClickedCard1(null);
    setClickedCard2(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  console.log(cards);

  return (
    <div className="App">
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.cardGrid}>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === clickedCard1 || card === clickedCard2 || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;