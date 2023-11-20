import { useEffect, useState } from "react";

function Counter({ operationValue = 1 }) {
  const lastCount = Number(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(lastCount);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <div>
        <button onClick={() => setCount(count + operationValue)}>
          + {operationValue}
        </button>

        <button onClick={() => setCount(count - operationValue)}>
          - {operationValue}
        </button>
      </div>
    </div>
  );
}

export default Counter;
