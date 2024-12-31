import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const buttonUp = () => {
    setCount(count + 1);
  };

  const buttonDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center p-10">
      <div className="bg-gray-400 p-5 rounded shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{count}</h1>
        <div className="flex gap-4">
          <button
            className="btn bg-blue-500 text-white py-2 px-4 rounded"
            onClick={buttonUp}
          >
            +
          </button>
          <button
            className="btn bg-red-500 text-white py-2 px-4 rounded"
            onClick={buttonDown}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
