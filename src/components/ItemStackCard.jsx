import PropTypes from "prop-types";
import "./ItemStackCard.css";

export default function ItemStackCard(props) {
  const item = props.item;
  return (
    <div className="item-stack-card">
      <p className="item-stack-card-name">{item.name}</p>
      <p className="item-stack-card-description">{item.description}</p>
      <p className="item-stack-card-count">You have: {item.count}</p>
    </div>
  );
}

ItemStackCard.propTypes = {
  item: PropTypes.object,
};
