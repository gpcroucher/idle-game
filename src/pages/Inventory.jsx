import ItemStackCard from "../components/ItemStackCard";
import NavBar from "../components/NavBar";
import "./Inventory.css";

export default function Inventory() {
  function getJunkInventory() {
    const storedInv = JSON.parse(localStorage.getItem("junkInventory"));
    console.log("Stored junkInventory value:", storedInv);
    return storedInv ? storedInv : [];
  }

  return (
    <>
      <NavBar exclude="/inventory" />
      <div className="inventory-container">
        {getJunkInventory().map((item) => {
          return <ItemStackCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
