import { useEffect, useState } from "react";

export default function ProgressBar(props: ProgressBarProps) {
  const [remaining, setRemaining] = useState(props.duration / 1000);
  const rgbString = props.colour.join(",");

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
    <div className="relative w-[100px] border border-gray-500 bg-[rgb(176,196,222)] text-center">
      <div
        className={`absolute left-0 h-full`}
        style={{
          width: `${percentageCompleted()}%`,
          backgroundColor: `rgb(${rgbString})`,
        }}
      ></div>
      <p className="m-0 opacity-95">{remaining}</p>
    </div>
  );

  function percentageCompleted() {
    const elapsedTime = Date.now() - props.startTime;
    console.log("elapsedTime:", elapsedTime);
    const percentage = (elapsedTime / props.duration) * 100;
    return percentage >= 100 ? 0 : percentage;
  }
}

type ProgressBarProps = {
  active: boolean; // whether or not there is an active countdown
  duration: number; // the duration of the countdown (displayed when the countdown is inactive)
  startTime: number; // the time in milliseconds when the countdown began
  endTime: number; // the time in milliseconds when the countdown is due to end
  colour: number[]; // the colour of the progress bar as an RGB value
};
