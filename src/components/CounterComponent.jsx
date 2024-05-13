import PropTypes from "prop-types";
const CounterComponent = ({ count }) => {

  
  return (
    <div>
      <p>Conteo: {count}</p>
    </div>
  );
};

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CounterComponent;
