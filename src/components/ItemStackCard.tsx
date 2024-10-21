import MaterialIcon from "./MaterialIcon";

export default function ItemStackCard({ itemstack }: { itemstack: Itemstack }) {
  return (
    <div className="rounded-md border border-black p-4">
      <div className="flex items-center gap-2">
        <p className="font-bold">{itemstack.item.name}</p>
        <MaterialIcon material={itemstack.item.material} />
      </div>
      <p>{itemstack.item.description}</p>
      <p>You have: {itemstack.count}</p>
    </div>
  );
}
