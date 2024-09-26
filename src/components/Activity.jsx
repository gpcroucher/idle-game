import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";
import "./Activity.css";

export default function Activity(props) {
  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const { onBegin, onEnd, baseTime, activityName } = props;

  useEffect(() => {
    if (active) {
      setTimeout(handleCountdownEnd, baseTime);
    }

    function handleCountdownEnd() {
      setActive(false);
      onEnd();
    }
  }, [active, baseTime, onEnd]);

  return (
    <div className="activity-box">
      <button onClick={handleClick}>{activityName}</button>
      <ProgressBar
        active={active}
        duration={baseTime}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );

  function handleClick() {
    onBegin();
    setActive(true);
    setStartTime(Date.now());
    setEndTime(Date.now() + baseTime);
  }
}

Activity.propTypes = {
  onBegin: PropTypes.func,
  onEnd: PropTypes.func,
  baseTime: PropTypes.number,
  activityName: PropTypes.string,
};
