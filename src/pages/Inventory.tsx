import { getInventory } from "../utils/inventoryFuncs";
import ItemStackCard from "../components/ItemStackCard";
import NavBar from "../components/NavBar";

export default function Inventory() {
  return (
    <>
      <NavBar exclude="/inventory" />
      <div className="grid grid-cols-4 gap-1">
        {getInventory().map((itemstack: Itemstack) => {
          return (
            <ItemStackCard key={itemstack.item.id} itemstack={itemstack} />
          );
        })}
      </div>
    </>
  );
}
