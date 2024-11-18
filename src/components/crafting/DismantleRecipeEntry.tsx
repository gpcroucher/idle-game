import * as Collapsible from "@radix-ui/react-collapsible";
import items from "../../assets/items";
import { dismantle } from "../../utils/craftingFuncs";
import React from "react";

export default function DismantleRecipeEntry({
  recipe,
}: {
  recipe: DismantleRecipe;
}) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <div>
          <div>
            <span className="capitalize">{recipe.tool}:</span>
            {recipe.output.map((outputLine) => {
              if ("itemID" in outputLine) {
                return (
                  <p>
                    {outputLine.count + "x " + items[outputLine.itemID].name}
                  </p>
                );
              } else if ("nFrom" in outputLine) {
                return (
                  <div>
                    <p>{outputLine.nFrom + " of:"}</p>
                    <br />
                    <p>
                      {outputLine.options.map<string>((option) => {
                        return option.count + "x " + items[option.itemID].name;
                      })}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <p>{recipe.time / 1000} seconds</p>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className="bg-slate-300">
        <button onClick={handleMake}>Make</button>
      </Collapsible.Content>
    </Collapsible.Root>
  );

  function handleMake(event: React.MouseEvent) {
    event.preventDefault();
    dismantle(recipe);
  }
}
