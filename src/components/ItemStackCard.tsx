export default function ItemStackCard({ itemstack }: { itemstack: Itemstack }) {
  return (
    <div className="rounded-md border border-black p-4">
      <p className="font-bold">{itemstack.item.name}</p>
      <p>{itemstack.item.description}</p>
      <p>You have: {itemstack.count}</p>
    </div>
  );
}
