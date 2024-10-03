import { useEffect, useState } from "react";
import { addToInventory } from "../utils/inventoryFuncs";

import Activity from "../components/Activity";
import JunkItem from "../components/JunkItem";
import "./Junkheap.css";

import items from "../assets/items";
import junkItems from "../assets/junkheapTable1";

export default function Junkheap() {
  const initialItems = [
    { item: items[0], uid: 0, count: 1 },
    { item: items[1], uid: 1, count: 1 },
  ];
  const [rummagedItems, setRummagedItems] = useState(() => {
    const memory = JSON.parse(localStorage.getItem("rummagedItems"));
    return memory ? memory : initialItems;
  });

  useEffect(() => {
    localStorage.setItem("rummagedItems", JSON.stringify(rummagedItems));
  }, [rummagedItems]);

  // removes an item from the list and puts it in the inventory
  function addToBag(itemstack) {
    addToInventory(itemstack);

    // remove the item from the list
    setRummagedItems(
      rummagedItems.filter((item) => item.uid !== itemstack.uid)
    );
  }

  // returns an itemstack corresponding to a random junk item from the list
  function getRandomJunk() {
    const randomInteger = Math.floor(Math.random() * junkItems.length);
    console.log(randomInteger);
    return {
      item: items[junkItems[randomInteger].id],
      uid: rummagedItems.length,
      count: 1,
    };
  }

  function handleJunkButton() {
    setRummagedItems([...rummagedItems, getRandomJunk()]);
  }

  // returns a JunkItem component for each itemstack in the list
  function displayItems() {
    // let i = 0;
    return rummagedItems.length ? (
      rummagedItems.map((itemstack) => {
        // i++;
        console.log(itemstack);
        return (
          <JunkItem
            key={itemstack.uid}
            uid={itemstack.uid}
            id={itemstack.item.id}
            name={itemstack.item.name}
            description={itemstack.item.description}
            collectFunc={addToBag}
          />
        );
      })
    ) : (
      <li>No items</li>
    );
  }

  return (
    <div className="room room-junkheap">
      <h2>Junkheap</h2>
      <Activity
        activityTitle={"activity-rummage-1"}
        onEnd={handleJunkButton}
        baseTime={0}
        activityName="Rummage in the junkheap!"
      />
      <ul className="junkheap-items">{displayItems()}</ul>
    </div>
  );
}
