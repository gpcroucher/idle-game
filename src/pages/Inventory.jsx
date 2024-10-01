import ItemStackCard from "../components/ItemStackCard";
import NavBar from "../components/NavBar";
import "./Inventory.css";

export default function Inventory() {
  function getInventory() {
    const storedInv = JSON.parse(localStorage.getItem("inventory"));
    console.log("Stored inventory value:", storedInv);
    return storedInv ? storedInv : [];
  }

  return (
    <>
      <NavBar exclude="/inventory" />
      <div className="inventory-container">
        {getInventory().map((itemstack) => {
          return (
            <ItemStackCard key={itemstack.item.id} itemstack={itemstack} />
          );
        })}
      </div>
    </>
  );
}
