import CounterComponent from "../components/CounterComponent";
import useCounter from "../hooks/useCounter";

const CounterHook = () => {
  const { counter, decrement, increment, reset } = useCounter();
  
  return (
    <div>
      <CounterComponent count={counter} />
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterHook;
