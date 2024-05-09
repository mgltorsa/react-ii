import { useState } from "react";
import CounterComponent from "../components/CounterComponent";

const CounterState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Contar</button>
    </div>
  );
};

export default CounterState;
