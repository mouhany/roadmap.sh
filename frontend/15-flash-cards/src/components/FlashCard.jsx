import PropTypes from "prop-types";

function FlashCard(props) {
  return (
    <div id="container-flashcard">
      {props.isFlipped ? (
        <h3>{props.currentAnswer}</h3>
      ) : (
        <h2>{props.currentQuestion}</h2>
      )}
    </div>
  );
}

FlashCard.propTypes = {
  isFlipped: PropTypes.bool.isRequired,
  currentQuestion: PropTypes.string.isRequired,
  currentAnswer: PropTypes.string.isRequired,
};

export default FlashCard;
