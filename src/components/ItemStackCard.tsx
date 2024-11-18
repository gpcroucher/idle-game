import CraftingDialog from "./CraftingDialog";
import MaterialIcon from "./MaterialIcon";

export default function ItemStackCard({ itemstack }: { itemstack: Itemstack }) {
  const { item } = itemstack;
  return (
    <div className="rounded-md border border-black p-4">
      <div className="flex items-center gap-2">
        <p className="font-bold">{item.name}</p>
        <MaterialIcon material={item.material} />
      </div>
      <p>{item.description}</p>
      <p>You have: {itemstack.count}</p>
      <div>
        <button>
          <img src="src/assets/icons/hammer-icon.png" alt="hammer" />
        </button>
        {"dismantleRecipes" in item && <CraftingDialog itemstack={itemstack} />}
      </div>
    </div>
  );
}
