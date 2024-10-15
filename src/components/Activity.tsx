import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import "./Activity.css";

export default function Activity(props: ActivityProps) {
  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const { onBegin = () => true, onEnd, baseTime = 0, activityName } = props;

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

type ActivityProps = {
  activityTitle: string;
  onBegin?: () => boolean;
  onEnd: () => void;
  baseTime?: number;
  activityName: string;
};
