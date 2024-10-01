import PropTypes from "prop-types";
import "./JunkItem.css";
import items from "../assets/items";

export default function JunkItem(props) {
  const { uid, id, name, description, collectFunc } = props;

  function addThisToBag() {
    collectFunc({
      item: items[id],
      uid: uid,
      count: 1,
    });
  }

  return (
    <div key={id} className="junkItem">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={addThisToBag}>Add to bag</button>
    </div>
  );
}

JunkItem.propTypes = {
  uid: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  collectFunc: PropTypes.func,
};
