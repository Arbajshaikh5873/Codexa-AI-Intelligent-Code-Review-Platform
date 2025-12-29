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
  const [review, setReview] = useState("");

  return (
    <div id="main">
      <Left code={code} setCode={setCode} setReview={setReview} />
      <Right review={review} />
    </div>
  );
}

export default App;
