import PropTypes from "prop-types";

export default function ProgressBar(props) {
  return (
    <div>
      <p>{props.time}</p>
    </div>
  );
}

ProgressBar.propTypes = {
  time: PropTypes.number,
};
