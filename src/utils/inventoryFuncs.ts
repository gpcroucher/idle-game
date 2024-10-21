export function addToInventory({ item, count }: Itemstack) {
  // load the inventory from local memory, or create it if it doesn't exist
  const inventory = getInventory();
  console.log("inventory:", inventory);

  // get the item stack in the inventory which matches the item given as argument (if it exists)
  const matchingStack = inventory.find((e: Itemstack) => e.item.id === item.id);
  console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

  // if there is a matching item stack, then increment it, otherwise create the item stack
  if (matchingStack !== undefined) {
    matchingStack.count += count;
    console.log(`Added ${count} ${item.name} to inventory`);
  } else {
    inventory.push({ item: item, count: count });
    console.log(`Created a stack of 1 ${item.name} in inventory`);
  }

  saveInventory(inventory);
}

export function decrementInventoryStack(item: Item) {
  removeFromInventory({ item: item, count: 1 });
}

export function incrementInventoryStack(item: Item) {
  addToInventory({ item: item, count: 1 });
}

export function getInventory(): Itemstack[] {
  return JSON.parse(localStorage.getItem("inventory") || "[]");
}

// shrinks an itemstack in the inventory by a given number, returning false if this would reduce the count of the stack to less than 0
export function removeFromInventory({ item, count }: Itemstack) {
  // load the inventory from local memory, or create it if it doesn't exist
  let inventory = getInventory();
  console.log("inventory:", inventory);

  // get the item stack in the inventory which matches the item given as argument (if it exists)
  const matchingStack = inventory.find((e: Itemstack) => e.item.id === item.id);
  console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

  // if there is a matching item stack which is large enough, then decrease it and return true, otherwise return false
  if (matchingStack !== undefined && matchingStack.count >= count) {
    matchingStack.count -= count;
    console.log(`Added ${count} ${item.name} to inventory`);
    // if the stack is now empty, remove it from the inventory
    if (matchingStack.count === 0) {
      inventory = inventory.filter(
        (itemstack: Itemstack) => itemstack.item.id !== item.id,
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
