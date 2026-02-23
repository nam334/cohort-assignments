import { useState } from "react";
import "./App.css";
import UsersA from "./features/q3-reusableCustomHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs"></p>
      <UsersA />
    </>
  );
}

export default App;
