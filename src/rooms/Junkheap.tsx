import { useEffect, useState } from "react";
import { addToInventory } from "../utils/inventoryFuncs";
import Activity from "../components/Activity";
import JunkItem from "../components/JunkItem";
import items from "../assets/items";
import junkItems from "../assets/junkheapTable1";

export default function Junkheap() {
  const initialItems = [
    { itemstack: { item: items[0], count: 1 }, uid: 0 },
    { itemstack: { item: items[1], count: 1 }, uid: 1 },
  ];
  const [rummagedItems, setRummagedItems] = useState<
    { itemstack: Itemstack; uid: number }[]
  >(() => {
    const memory = JSON.parse(localStorage.getItem("rummagedItems") || "[]");
    return memory.length ? memory : initialItems;
  }); // todo: this is janky?

  useEffect(() => {
    localStorage.setItem("rummagedItems", JSON.stringify(rummagedItems));
  }, [rummagedItems]);

  // removes an item from the list and puts it in the inventory
  function addToBag(itemstack: Itemstack, uid: number) {
    addToInventory(itemstack);

    // remove the item from the list
    setRummagedItems(
      rummagedItems.filter(
        (uitemstack: { itemstack: Itemstack; uid: number }) =>
          uitemstack.uid !== uid,
      ),
    );
  }

  // returns an itemstack corresponding to a random junk item from the list
  function getRandomJunk() {
    const randomInteger = Math.floor(Math.random() * junkItems.length);
    console.log(randomInteger);
    return {
      itemstack: {
        item: items[junkItems[randomInteger].id],
        count: 1,
      },
      uid: rummagedItems.length as number,
    };
  }

  function handleJunkButton() {
    setRummagedItems([...rummagedItems, getRandomJunk()]);
  }

  // returns a JunkItem component for each itemstack in the list
  function displayItems() {
    // let i = 0;
    return rummagedItems.length > 0 ? (
      rummagedItems.map((uitemstack: { itemstack: Itemstack; uid: number }) => {
        // i++;
        console.log(uitemstack);
        return (
          <JunkItem
            key={uitemstack.uid}
            uid={uitemstack.uid}
            item={uitemstack.itemstack.item}
            collectFunc={addToBag}
          />
        );
      })
    ) : (
      <li>No items</li>
    );
  }

  return (
    <div className="border border-black p-4">
      <h2>Junkheap</h2>
      <Activity
        activityTitle={"activity-rummage-1"}
        onEnd={handleJunkButton}
        baseTime={0}
        activityName="Rummage in the junkheap!"
        colour={[95, 158, 160]}
      />
      <ul className="m-0 pl-0">{displayItems()}</ul>
    </div>
  );
}
