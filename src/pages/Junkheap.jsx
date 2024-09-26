import { useEffect, useState } from "react";

import Activity from "../components/Activity";
import JunkItem from "../components/JunkItem";
import NavBar from "../components/NavBar";
import "./Junkheap.css";

import junkItems from "../assets/junkheapTable1";

export default function Junkheap() {
  const initialItems = [
    { ...junkItems[0], uid: 0 },
    { ...junkItems[1], uid: 1 },
  ];
  const [items, setItems] = useState(() => {
    const memory = JSON.parse(localStorage.getItem("recentJunk"));
    return memory ? memory : initialItems;
  });

  useEffect(() => {
    localStorage.setItem("recentJunk", JSON.stringify(items));
  }, [items]);

  // removes an item from the list and puts it in the inventory
  function addToBag(junkItem) {
    // load the inventory from local memory, or create it if it doesn't exist
    const storedInv = JSON.parse(localStorage.getItem("junkInventory"));
    console.log("Stored junkInventory value:", storedInv);
    const junkInventory = storedInv ? storedInv : [];
    console.log("junkInventory:", junkInventory);

    // get the item stack in the inventory which matches the item given as argument (if it exists)
    const matchingStack = junkInventory.find((e) => e.id === junkItem.id);
    console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

    // if there is a matching item stack, then increment it, otherwise create the item stack
    if (matchingStack !== undefined) {
      matchingStack.count += 1;
      console.log(`Added 1 ${junkItem.name} to junkInventory`);
    } else {
      junkInventory.push({ ...junkItem, count: 1 });
      console.log(`Created a stack of 1 ${junkItem.name} in junkInventory`);
    }

    // save the inventory to local memory
    localStorage.setItem("junkInventory", JSON.stringify(junkInventory));
    console.log("Saved junkInventory to local storage.");

    // remove the item from the list
    setItems(items.filter((item) => item.uid !== junkItem.uid));
  }

  // returns a random junk item from the list
  function getRandomJunk() {
    const randomInteger = Math.floor(Math.random() * (junkItems.length - 1));
    return { ...junkItems[randomInteger], uid: items.length };
  }

  function handleJunkButton() {
    setItems([...items, getRandomJunk()]);
  }

  // returns a JSX JunkItem component for each item in the list
  function displayItems() {
    // let i = 0;
    return items.length ? (
      items.map((item) => {
        // i++;
        return (
          <JunkItem
            key={item.uid}
            uid={item.uid}
            id={item.id}
            name={item.name}
            description={item.description}
            collectFunc={addToBag}
          />
        );
      })
    ) : (
      <li>No items</li>
    );
  }

  return (
    <div className="junkheap">
      <NavBar exclude="/junkheap" />
      <Activity
        onBegin={() => {}}
        onEnd={handleJunkButton}
        baseTime={5000}
        activityName={"Rummage in the junkheap!"}
      />
      <ul className="junkheap-items">{displayItems()}</ul>
    </div>
  );
}
