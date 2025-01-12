import PropTypes from "prop-types";

function ProgressBar(props) {
  return (
    <div id="container-progressbar">
      <div
        id="progressbar"
        role="progressbar"
        aria-valuenow={Number(
          (
            (props.currentIndex + 1) *
            (100 / props.dataFlashCards.length)
          ).toFixed(1)
        )}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="progressbar-label"
        style={{
          width: `${Number(
            (
              (props.currentIndex + 1) *
              (100 / props.dataFlashCards.length)
            ).toFixed(1)
          )}%`,
        }}
      >
        <small id="progress">
          {Number(
            (
              (props.currentIndex + 1) *
              (100 / props.dataFlashCards.length)
            ).toFixed(1)
          )}
          %
        </small>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  dataFlashCards: PropTypes.array.isRequired,
};

export default ProgressBar;
