import { useState } from "react";
import "./App.css";
function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(6);
  const addValue = () => {
    setCounter(counter + 2);
    console.log("add value called: ", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("value removed ", counter);
  };
  return (
    <>
      <h1>this is the project</h1>
      <h2>about this project: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
