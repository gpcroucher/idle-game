import items from "../assets/items";

export function addToInventory({ itemID, count }: IDstack) {
  // load the inventory from local memory, or create it if it doesn't exist
  const inventory = getInventory();
  console.log("inventory:", inventory);

  // get the item stack in the inventory which matches the item given as argument (if it exists)
  const matchingStack = inventory.find((e: Itemstack) => e.item.id === itemID);
  console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

  // if there is a matching item stack, then increment it, otherwise create the item stack
  if (matchingStack !== undefined) {
    matchingStack.count += count;
    console.log(`Added ${count} of item #${itemID} to inventory`);
  } else {
    inventory.push({
      item: items.find((item) => item.id === itemID)!,
      count: count,
    });
    console.log(`Created a stack of ${count} of item #${itemID} in inventory`);
  }

  saveInventory(inventory);
}

export function decrementInventoryStack(item: Item) {
  removeFromInventory({ itemID: item.id, count: 1 });
}

export function incrementInventoryStack(item: Item) {
  addToInventory({ itemID: item.id, count: 1 });
}

export function getInventory(): Itemstack[] {
  return JSON.parse(localStorage.getItem("inventory") || "[]");
}

// shrinks an itemstack in the inventory by a given number, returning false if this would reduce the count of the stack to less than 0
export function removeFromInventory({ itemID, count }: IDstack) {
  // load the inventory from local memory, or create it if it doesn't exist
  let inventory = getInventory();
  console.log("inventory:", inventory);

  // get the item stack in the inventory which matches the item given as argument (if it exists)
  const matchingStack = inventory.find((e: Itemstack) => e.item.id === itemID);
  console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

  // if there is a matching item stack which is large enough, then decrease it and return true, otherwise return false
  if (matchingStack !== undefined && matchingStack.count >= count) {
    matchingStack.count -= count;
    console.log(`Removed ${count} of item #${itemID} from inventory`);
    // if the stack is now empty, remove it from the inventory
    if (matchingStack.count === 0) {
      inventory = inventory.filter(
        (itemstack: Itemstack) => itemstack.item.id !== itemID,
      );
    }
    saveInventory(inventory);
    return true;
  } else {
    return false;
  }
}

export function saveInventory(inventory: Itemstack[]) {
  // save the inventory to local memory
  localStorage.setItem("inventory", JSON.stringify(inventory));
  console.log("Saved inventory to local storage.");
}
