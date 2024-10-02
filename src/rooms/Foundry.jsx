import Activity from "../components/Activity";
import { useEffect, useState } from "react";
import "./Foundry.css";
import { decrementInventoryStack, getInventory } from "../utils/inventoryFuncs";
import items from "../assets/items";

export default function Foundry() {
  const [sheets, setSheets] = useState(() => {
    const memory = JSON.parse(localStorage.getItem("foundry-sheets"));
    return memory ? memory : 0;
  });
  const [hopperContents, setHopperContents] = useState(() => {
    const memory = JSON.parse(localStorage.getItem("foundry-hopperContents"));
    return memory ? memory : 0;
  });

  useEffect(() => {
    localStorage.setItem("foundry-sheets", JSON.stringify(sheets));
  }, [sheets]);
  useEffect(() => {
    localStorage.setItem(
      "foundry-hopperContents",
      JSON.stringify(hopperContents)
    );
  }, [hopperContents]);

  return (
    <div className="room room-foundry">
      <h2>Foundry</h2>
      <p>The hopper contains {hopperContents} scrap</p>
      <p>Add an item to the hopper:</p>
      {displayHopperables()}
      <Activity
        activityTitle={"activity-foundry-melt-steel"}
        onBegin={checkHopper}
        onEnd={doMelt}
        baseTime={5000}
        activityName="Melt some scrap!"
      />
      <p>Sheets: {sheets}</p>
    </div>
  );

  function addToHopper(event) {
    const thisItemStack = {
      item: items[event.target.id.split("#")[1]],
      count: 1,
    };
    console.log(thisItemStack);
    setHopperContents(
      hopperContents + thisItemStack.item.meltvalue * thisItemStack.count
    );
    decrementInventoryStack(thisItemStack.item);
  }

  function checkHopper() {
    if (hopperContents >= 4) {
      return true;
    }
  }

  function displayHopperables() {
    const hopperables = getHopperablesFromInventory().map((itemstack) => (
      <div key={itemstack.item.id}>
        <p>
          {itemstack.item.name} x{itemstack.count}
        </p>
        <button
          onClick={addToHopper}
          id={`hopperableButton#${itemstack.item.id}`}
        >
          Add to Hopper
        </button>
      </div>
    ));
    return hopperables.length > 0 ? (
      hopperables
    ) : (
      <p>{"You don't have any meltable items."}</p>
    );
  }

  function doMelt() {
    setSheets(sheets + 1);
    setHopperContents(hopperContents - 4);
  }

  function getHopperablesFromInventory() {
    const inventory = getInventory();
    return inventory.filter((itemstack) => itemstack.item.meltable === "steel");
  }
}
