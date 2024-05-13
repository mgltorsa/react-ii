import { useReducer } from "react";
import CounterComponent from "../components/CounterComponent";
import { ThemeContext } from "../contexts/ThemeContext";

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
      <ThemeContext.Consumer>
        {(value) => (
          <>
            <CounterComponent count={state.count} />
            <button onClick={() => dispath({ type: "INCREMENTAR" })}>
              Contar
            </button>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default CounterReducer;
