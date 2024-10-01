import { useEffect, useState } from "react";

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
  function addToBag(newItem) {
    // load the inventory from local memory, or create it if it doesn't exist
    const storedInv = JSON.parse(localStorage.getItem("inventory"));
    console.log("Stored inventory value:", storedInv);
    const inventory = storedInv ? storedInv : [];
    console.log("inventory:", inventory);

    // get the item stack in the inventory which matches the item given as argument (if it exists)
    const matchingStack = inventory.find((e) => e.item.id === newItem.item.id);
    console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

    // if there is a matching item stack, then increment it, otherwise create the item stack
    if (matchingStack !== undefined) {
      matchingStack.count += newItem.count;
      console.log(`Added 1 ${newItem.item.name} to inventory`);
    } else {
      inventory.push({ item: newItem, count: newItem.count });
      console.log(`Created a stack of 1 ${newItem.item.name} in inventory`);
    }

    // save the inventory to local memory
    localStorage.setItem("inventory", JSON.stringify(inventory));
    console.log("Saved inventory to local storage.");

    // remove the item from the list
    setRummagedItems(rummagedItems.filter((item) => item.uid !== newItem.uid));
  }

  // returns an itemstack corresponding to a random junk item from the list
  function getRandomJunk() {
    const randomInteger = Math.floor(Math.random() * (junkItems.length - 1));
    return {
      item: junkItems[randomInteger],
      uid: rummagedItems.length,
      count: 1,
    };
  }

  function handleJunkButton() {
    setRummagedItems([...rummagedItems, getRandomJunk()]);
  }

  // returns a JSX JunkItem component for each item in the list
  function displayItems() {
    // let i = 0;
    return rummagedItems.length ? (
      rummagedItems.map((item) => {
        // i++;
        console.log(item);
        return (
          <JunkItem
            key={item.uid}
            uid={item.uid}
            id={item.item.id}
            name={item.item.name}
            description={item.item.description}
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
        baseTime={5000}
        activityName="Rummage in the junkheap!"
      />
      <ul className="junkheap-items">{displayItems()}</ul>
    </div>
  );
}
