import PropTypes from "prop-types";
import "./JunkItem.css";

export default function JunkItem(props) {
  const { uid, id, name, description, collectFunc } = props;

  function addThisToBag() {
    collectFunc({
      uid: uid,
      id: id,
      name: name,
      description: description,
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
