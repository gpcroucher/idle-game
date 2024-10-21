import items from "../assets/items";
import MaterialIcon from "./MaterialIcon";

export default function JunkItem(props: JunkItemProps) {
  const { uid, item, collectFunc } = props;
  const { id, name, description, material } = item;

  function addThisToBag() {
    collectFunc(
      {
        item: items[id],
        count: 1,
      },
      uid,
    );
  }

  return (
    <div key={id} className="border border-black">
      <div className="flex">
        <h3>{name}</h3>
        <MaterialIcon material={material} />
      </div>
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
