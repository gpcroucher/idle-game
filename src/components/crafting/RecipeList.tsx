import DismantleRecipeEntry from "./DismantleRecipeEntry";

type RecipeListProps = {
  type: "dismantle" | "craft";
  item: Item;
};

export default function RecipeList({ type, item }: RecipeListProps) {
  return (
    <>
      {type === "dismantle" && (
        <div className={`w-1/2 flex-grow bg-slate-400`}>
          <p>Dismantle</p>
          {item.dismantleRecipes?.map((recipe: DismantleRecipe, index) => {
            return (
              <DismantleRecipeEntry
                key={"dismantle#" + index}
                recipe={recipe}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
