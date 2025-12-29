import axios from "axios";
import Editor from "react-simple-code-editor";

function Left({ code, setCode, setReview, setIsLoading }) {
  const reviewCode = async () => {
    try {
      const response = await axios.post(
        "https://codexa-ai-intelligent-code-review.onrender.com/api/ai/get-review",
        { code }
      );
      const data = response.data;
      if (data.error) {
        setReview(`❌ **Gemini Error**\n\n${data.error.message}`);
        setIsLoading(false);
        return;
      }
      console.log("data in Left", data);

      setReview(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setReview(`❌ **Gemini Error**\n\n${error.message}`);
    }
  };

  return (
    <div className="left flex flex-col gap-4 h-full">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <svg
            className="w-5 h-5 text-purple-400"
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
          Your Code
        </h2>
        <span className="text-sm text-gray-400">{code.length} characters</span>
      </div>

      {/* Code Editor */}
      <div className="code flex-1 bg-slate-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden shadow-2xl">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            Prism.highlight(code, Prism.languages.javascript, "javascript")
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
            color: "#e2e8f0",
          }}
        />
      </div>

      {/* Review Button */}
      <button
        className="review w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          reviewCode();
          setIsLoading(true);
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
        </svg>
        Review Code with AI
      </button>
    </div>
  );
}

export default Left;
