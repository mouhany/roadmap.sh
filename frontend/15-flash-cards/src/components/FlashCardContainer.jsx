import ProgressBar from "./ProgressBar";
import FlashCard from "./FlashCard";
import Navigation from "./Navigation";
import { dataFlashCards } from "../data/dataFlashCards";
import { useState } from "react";

function FlashCardContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main>
      <div id="flashcard-title">
        <h2>JavaScript</h2>
        <div>{`${currentIndex + 1} of ${dataFlashCards.length}`}</div>
      </div>
      <div id="container">
        <ProgressBar
          currentIndex={currentIndex}
          dataFlashCards={dataFlashCards}
        />
        <FlashCard
          currentQuestion={dataFlashCards[currentIndex].question}
          currentAnswer={dataFlashCards[currentIndex].answer}
          isFlipped={isFlipped}
        />
        <Navigation
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />
      </div>
    </main>
  );
}

export default FlashCardContainer;
