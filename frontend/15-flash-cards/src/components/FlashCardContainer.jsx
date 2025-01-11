import ProgressBar from "./ProgressBar";
import FlashCard from "./FlashCard";
import { dataFlashCards } from "../data/dataFlashCards";
import { useState } from "react";

function FlashCardContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main>
      <div id="flashcard-title">
        <h2>Javascript</h2>
        <small>{`${currentIndex + 1} of ${dataFlashCards.length}`}</small>
      </div>
      <div id="container">
        <ProgressBar currentIndex={currentIndex} />
        <FlashCard
          currentQuestion={dataFlashCards[currentIndex].question}
          currentAnswer={dataFlashCards[currentIndex].answer}
          isFlipped={isFlipped}
        />
        <div id="flashcard-navigation">
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setIsFlipped(false);
              }
            }}
            aria-label="Previous"
            className={currentIndex > 0 ? "enable" : "disable"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span>Previous</span>
          </button>
          <button
            onClick={() => setIsFlipped((prevState) => !prevState)}
            aria-label={isFlipped ? "Hide Answer" : "Show Answer"}
            className="enable"
          >
            {isFlipped ? "Hide Answer" : "Show Answer"}
          </button>
          <button
            onClick={() => {
              if (currentIndex < 19) {
                setCurrentIndex(currentIndex + 1);
                setIsFlipped(false);
              }
            }}
            aria-label="Next"
            className={currentIndex < 19 ? "enable" : "disable"}
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default FlashCardContainer;
