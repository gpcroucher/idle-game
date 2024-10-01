export function addToInventory(itemstack) {
  // load the inventory from local memory, or create it if it doesn't exist
  const inventory = getInventory();
  console.log("inventory:", inventory);

  // get the item stack in the inventory which matches the item given as argument (if it exists)
  const matchingStack = inventory.find((e) => e.item.id === itemstack.item.id);
  console.log(`There ${matchingStack ? "is a" : "is no"} matching stack.`);

  // if there is a matching item stack, then increment it, otherwise create the item stack
  if (matchingStack !== undefined) {
    matchingStack.count += itemstack.count;
    console.log(`Added ${itemstack.count} ${itemstack.item.name} to inventory`);
  } else {
    inventory.push({ item: itemstack.item, count: itemstack.count });
    console.log(`Created a stack of 1 ${itemstack.item.name} in inventory`);
  }

  saveInventory(inventory);
}

export function getInventory() {
  const storedInv = JSON.parse(localStorage.getItem("inventory"));
  return storedInv ? storedInv : [];
}

export function saveInventory(inventory) {
  // save the inventory to local memory
  localStorage.setItem("inventory", JSON.stringify(inventory));
  console.log("Saved inventory to local storage.");
}
