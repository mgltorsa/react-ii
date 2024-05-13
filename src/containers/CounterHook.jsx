import { useContext } from "react";
import CounterComponent from "../components/CounterComponent";
import useCounter from "../hooks/useCounter";
import { ThemeContext } from "../contexts/ThemeContext";

const CounterHook = () => {
  const { counter, decrement, increment, reset } = useCounter();

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <CounterComponent count={counter} />
      <button
        style={{
          backgroundColor: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
        }}
        onClick={increment}
      >
        Incrementar
      </button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterHook;
