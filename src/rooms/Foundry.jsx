import Activity from "../components/Activity";
import { useState } from "react";
import "./Foundry.css";

export default function Foundry() {
  const [sheets, setSheets] = useState(0);
  const [hopperContents, setHopperContents] = useState([]);

  return (
    <div className="room room-foundry">
      <h2>Foundry</h2>
      <Activity
        activityTitle={"activity-foundry-add-to-hopper"}
        onEnd={addToHopper}
        activityName={"Add an item to the hopper"}
      />
      <Activity
        activityTitle={"activity-foundry-melt-steel"}
        onEnd={handleMeltButton}
        baseTime={5000}
        activityName="Melt some scrap!"
      />
      <p>Sheets: {sheets}</p>
    </div>
  );

  function addToHopper() {
    setHopperContents([
      ...hopperContents,
      {
        id: 0,
        name: "Useless Sprocket",
        description: "A toothed wheel with several teeth missing or bent",
      },
    ]);
    console.log(hopperContents);
  }

  function handleMeltButton() {
    setSheets(sheets + 1);
  }
}
