import { useState, useEffect } from "react";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

function App() {
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [code, setCode] = useState("function sum (){return 1+1}");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm flex-shrink-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">AI Code Reviewer</h1>
            <svg
              className="w-5 h-5 text-purple-400 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 flex-1 overflow-x-auto overflow-y-auto">
        <div id="main" className="grid lg:grid-cols-2 gap-6 h-ful ">
          <Left
            code={code}
            setCode={setCode}
            setReview={setReview}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Right review={review} isLoading={isLoading} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/20 backdrop-blur-sm flex-shrink-0">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400 text-sm">
          Powered by AI • Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}

export default App;
