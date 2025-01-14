import PropTypes from "prop-types";

function Navigation(props) {
  return (
    <div id="flashcard-navigation">
      <button
        onClick={() => {
          if (props.currentIndex > 0) {
            props.setCurrentIndex(props.currentIndex - 1);
            props.setIsFlipped(false);
          }
        }}
        aria-label="Previous"
        className={props.currentIndex > 0 ? "enable" : "disable"}
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
        onClick={() => props.setIsFlipped((prevState) => !prevState)}
        aria-label={props.isFlipped ? "Hide Answer" : "Show Answer"}
        className="enable"
      >
        {props.isFlipped ? "Hide Answer" : "Show Answer"}
      </button>
      <button
        onClick={() => {
          if (props.currentIndex < props.dataFlashCards.length - 1) {
            props.setCurrentIndex(props.currentIndex + 1);
            props.setIsFlipped(false);
          }
        }}
        aria-label="Next"
        className={props.currentIndex < props.dataFlashCards.length - 1 ? "enable" : "disable"}
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
  );
}

Navigation.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  setIsFlipped: PropTypes.func.isRequired,
};

export default Navigation;
