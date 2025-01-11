function FlashCard(props) {
  return (
    <div id="container-flashcard">
      <h3>{props.isFlipped ? props.currentAnswer : props.currentQuestion}</h3>
    </div>
  );
}

export default FlashCard;
