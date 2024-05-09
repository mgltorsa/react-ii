import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const CounterComponent = ({ count }) => {

  const user = useContext(UserContext)
  
  return (
    <div>
      <p>Usuario: {user.username}</p>
      <p>Conteo: {count}</p>
    </div>
  );
};

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CounterComponent;
