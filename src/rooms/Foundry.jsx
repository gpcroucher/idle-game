import Activity from "../components/Activity";
import { useState } from "react";
import "./Foundry.css";

export default function Foundry() {
  const [sheets, setSheets] = useState(0);

  return (
    <div className="room room-foundry">
      <h2>Foundry</h2>
      <Activity
        activityTitle={"activity-foundry-melt-steel"}
        onBegin={() => true}
        onEnd={handleMeltButton}
        baseTime={5000}
        activityName="Melt some scrap!"
      />
      <p>Sheets: {sheets}</p>
    </div>
  );

  function handleMeltButton() {
    setSheets(sheets + 1);
  }
}
