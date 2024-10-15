import "./ItemStackCard.css";

export default function ItemStackCard({ itemstack }: { itemstack: Itemstack }) {
  return (
    <div className="item-stack-card">
      <p className="item-stack-card-name">{itemstack.item.name}</p>
      <p className="item-stack-card-description">
        {itemstack.item.description}
      </p>
      <p className="item-stack-card-count">You have: {itemstack.count}</p>
    </div>
  );
}
