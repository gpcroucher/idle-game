import PropTypes from "prop-types";
import "./ProgressBar.css";
import { useEffect, useState } from "react";

export default function ProgressBar(props) {
  const [remaining, setRemaining] = useState(props.duration / 1000);

  useEffect(() => {
    if (props.active) {
      var timer = setInterval(() => {
        setRemaining(secondsRemaining());
      }, 500);
    } else {
      setRemaining(props.duration / 1000);
    }
    function secondsRemaining() {
      return Math.ceil((props.endTime - Date.now()) / 1000);
    }
    return () => clearInterval(timer);
  }, [props.active, props.endTime, props.duration]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${percentageCompleted()}%` }}
      ></div>
      <p className="progress-text">{remaining}</p>
    </div>
  );

  function percentageCompleted() {
    const elapsedTime = Date.now() - props.startTime;
    console.log("elapsedTime:", elapsedTime);
    const percentage = (elapsedTime / props.duration) * 100;
    return percentage >= 100 ? 0 : percentage;
  }
}

ProgressBar.propTypes = {
  active: PropTypes.bool, // whether or not there is an active countdown
  duration: PropTypes.number, // the duration of the countdown (displayed when the countdown is inactive)
  startTime: PropTypes.number, // the time in milliseconds when the countdown began
  endTime: PropTypes.number, // the time in milliseconds when the countdown is due to end
};
