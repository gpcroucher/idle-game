import { useEffect, useState } from "react";
import JunkItem from "../components/JunkItem";
import NavBar from "../components/NavBar";
import "./Junkheap.css";

export default function Junkheap() {
  const junkItems = [
    {
      id: 0,
      name: "Useless Sprocket",
      description: "A toothed wheel with several teeth missing or bent",
    },
    {
      id: 1,
      name: "Doohickey Case",
      description:
        "A little metal box that used to contain some kind of device",
    },
    {
      id: 2,
      name: "Dead Lightbulb",
      description: "A sooty bulb with broken filaments",
    },
    {
      id: 3,
      name: "Cracked Vial",
      description: "An acrid-smelling vial, no longer watertight",
    },
    { id: 4, name: "Table Leg", description: "A disembodied wooden table leg" },
    {
      id: 5,
      name: "Frazzled Motor",
      description: "An electric motor which has been pushed beyond its limits",
    },
    {
      id: 6,
      name: "One-legged Capacitor",
      description: "A capacitor damaged beyond repair",
    },
    {
      id: 7,
      name: "Dog-eared Manual",
      description: "This would have been informative, but it's all soggy",
    },
    {
      id: 8,
      name: "Stripped Bolt",
      description: "A large steel bolt worn smooth",
    },
  ];

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

  function addToBag(junkItem) {
    const storedInv = JSON.parse(localStorage.getItem("junkInventory"));
    console.log("Stored junkInventory value:", storedInv);
    const junkInventory = storedInv ? storedInv : [];
    console.log("junkInventory:", junkInventory);
    const matchingStack = junkInventory.find((e) => e.id === junkItem.id);
    console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);
    if (matchingStack !== undefined) {
      matchingStack.count += 1;
      console.log(`Added 1 ${junkItem.name} to junkInventory`);
    } else {
      junkInventory.push({ ...junkItem, count: 1 });
      console.log(`Created a stack of 1 ${junkItem.name} in junkInventory`);
    }
    localStorage.setItem("junkInventory", JSON.stringify(junkInventory));
    console.log("Saved junkInventory to local storage.");

    // console.log(items.filter((item) => item.uid !== junkItem.uid));
    setItems(items.filter((item) => item.uid !== junkItem.uid));
  }

  function getRandomJunk() {
    const randomInteger = Math.floor(Math.random() * (junkItems.length - 1));
    return { ...junkItems[randomInteger], uid: items.length };
  }

  function handleJunkButton() {
    setItems([...items, getRandomJunk()]);
  }

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
      <div className="junkheap-controls">
        <button onClick={() => console.log(items)}>Debug!</button>
        <button onClick={handleJunkButton}>Rummage in the junkheap!</button>
      </div>

      <ul className="junkheap-items">{displayItems()}</ul>
    </div>
  );
}
