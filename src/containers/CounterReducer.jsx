import { useReducer } from "react";
import CounterComponent from "../components/CounterComponent";

const initialCounterState = {
  count: 0,
};

const counterReducer = (state, action) => {
  if (action.type == "INCREMENTAR") {
    return { count: state.count + 1 };
  }

  return state;
};

const CounterReducer = () => {
  const [state, dispath] = useReducer(counterReducer, initialCounterState);

  return (
    <div>
      <CounterComponent count={state.count} />
      <button onClick={() => dispath({ type: "INCREMENTAR" })}>Contar</button>
    </div>
  );
};

export default CounterReducer;
