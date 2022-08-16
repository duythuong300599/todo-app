import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useStore } from "./stores";

function App() {
  const [count, setCount] = useState(0);
  const state = useStore();
  console.log(state);

  return <></>;
}

export default App;
