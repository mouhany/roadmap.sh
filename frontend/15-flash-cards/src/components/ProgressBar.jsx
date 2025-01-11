function ProgressBar(props) {
  return (
    <div id="container-progressbar">
      <div
        id="progressbar"
        role="progressbar"
        aria-valuenow={(props.currentIndex + 1) * 5}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-labelledby="progressbar-label"
        style={{ width: `${(props.currentIndex + 1) * 5}%` }}
      >
        <span id="progress">{(props.currentIndex + 1) * 5}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
