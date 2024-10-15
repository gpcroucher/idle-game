import "./JunkItem.css";
import items from "../assets/items";

export default function JunkItem(props: JunkItemProps) {
  const { uid, item, collectFunc } = props;
  const { id, name, description } = item;

  function addThisToBag() {
    collectFunc(
      {
        item: items[id],
        count: 1,
      },
      uid
    );
  }

  return (
    <div key={id} className="junkItem">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={addThisToBag}>Add to bag</button>
    </div>
  );
}

type JunkItemProps = {
  uid: number;
  item: Item;
  collectFunc: (itemstack: Itemstack, uid: number) => void;
};
