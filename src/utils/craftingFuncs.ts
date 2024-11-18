import { addToInventory, removeFromInventory } from "./inventoryFuncs";

export function dismantle(recipe: DismantleRecipe) {
  // TODO check all the requirements

  console.log(`Dismantling item #${recipe.input.itemID}`);

  // calculate output
  const outputItems = calculateDismantleOutput(recipe);
  // remove input from inventory
  const removed = removeFromInventory({
    itemID: recipe.input.itemID,
    count: 1,
  });
  // add output to inventory
  if (removed) {
    for (const outputItem of outputItems) {
      addToInventory(outputItem);
    }
  }
}

function calculateDismantleOutput({ output }: DismantleRecipe) {
  if (!output) return [];

  const outputItems = [] as IDstack[];
  for (const line of output) {
    if ("nFrom" in line) {
      // TODO do random selection
    } else {
      outputItems.push(line);
    }
  }
  return outputItems;
}

/* 
output: (
    | { itemID: number; count: number }
    | { nFrom: number; options: { itemID: number; count: number }[] }
  )[];
*/
