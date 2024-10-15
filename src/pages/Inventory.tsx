import { getInventory } from "../utils/inventoryFuncs";

import ItemStackCard from "../components/ItemStackCard";
import NavBar from "../components/NavBar";
import "./Inventory.css";

export default function Inventory() {
  return (
    <>
      <NavBar exclude="/inventory" />
      <div className="inventory-container">
        {getInventory().map((itemstack: Itemstack) => {
          return (
            <ItemStackCard key={itemstack.item.id} itemstack={itemstack} />
          );
        })}
      </div>
    </>
  );
}
