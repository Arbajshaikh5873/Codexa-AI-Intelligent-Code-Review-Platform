import { useState } from "react";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

 

  const [code, setCode] = useState("fucntion sum (){return 1+1}");

  return (
    <div id="main">
      <Left code={code} setCode={setCode} />
      <Right />
    </div>
  );
}

export default App;
