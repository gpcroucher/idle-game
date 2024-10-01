import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
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

    // stop the countdown and run the activity's end function
    function handleCountdownEnd() {
      setActive(false);
      onEnd();
    }
  }, [active, baseTime, onEnd]);

  return (
    <div className={`activity-box ${props.activityTitle}`}>
      <button onClick={handleClick}>{activityName}</button>
      {baseTime > 0 ? (
        <ProgressBar
          active={active}
          duration={baseTime}
          startTime={startTime}
          endTime={endTime}
        />
      ) : (
        <></>
      )}
    </div>
  );

  function handleClick() {
    // check conditions to begin the activity
    if (onBegin()) {
      setActive(true);
      setStartTime(Date.now());
      setEndTime(Date.now() + baseTime);
    }
  }
}

Activity.propTypes = {
  activityTitle: PropTypes.string,
  onBegin: PropTypes.func,
  onEnd: PropTypes.func,
  baseTime: PropTypes.number,
  activityName: PropTypes.string,
};

Activity.defaultProps = {
  onBegin: () => true,
  baseTime: 0,
};
