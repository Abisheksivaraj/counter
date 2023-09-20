import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count >= 20) {
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
  };
  const reset = () => {
    const updatedCount = 0;
    setCount(updatedCount);
  };
  const decrease = () => {
    if (count === 0) {
      reset();
      return;
    }
    const updatedCount = count - 1;
    setCount(updatedCount);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <div>
        <h1 className="text-4xl font-medium">
          Counter: <span className="font-black">{count}</span>
        </h1>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-red-600 text-white text-xl font-medium rounded"
          onClick={decrease}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-cyan-600 text-white text-xl font-medium rounded"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white text-xl font-medium rounded"
          onClick={increase}
        >
          Increase
        </button>
      </div>

      <div>
        <h1 className="text-4xl font-medium">
          Counter: <span className="font-black">{count}</span>
        </h1>
      </div>

      <div>
        <h1 className="text-4xl font-medium">
          Counter: <span className="font-black">{count}</span>
        </h1>
      </div>
    </main>
  );
};

export default App;
