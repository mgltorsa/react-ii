import PropTypes from "prop-types";

const LuzComponent = ({ encendida }) => {
  const color = encendida ? "yellow" : "black";
  return <div style={{ backgroundColor: color }}>Luz</div>;
};

LuzComponent.propTypes = {
  encendida: PropTypes.bool.isRequired,
};

export default LuzComponent;
