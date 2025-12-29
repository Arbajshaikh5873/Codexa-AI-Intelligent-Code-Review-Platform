import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Right({ review, isLoading }) {
  return (
    <div className="right flex flex-col gap-4 h-full max-h-full">
      {/* Header Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          AI Review
        </h2>
      </div>

      {/* Review Content */}
      <div className="flex-1 bg-slate-800/50 backdrop-blur rounded-xl border border-purple-500/20 shadow-2xl min-h-0">
        <div className="h-full overflow-y-auto overflow-x-hidden p-6">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                <svg
                  className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-gray-300 font-medium mb-1">
                  AI is analyzing your code...
                </p>
                <p className="text-gray-500 text-sm">
                  This may take a few seconds
                </p>
              </div>
            </div>
          ) : !review ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <svg
                className="w-16 h-16 text-purple-400/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-center text-gray-400">
                Your AI-powered code review will appear here.
                <br />
                <span className="text-sm text-gray-500">
                  Click "Review Code with AI" to get started.
                </span>
              </p>
            </div>
          ) : (
            <div
              className="prose prose-invert max-w-none text-gray-200 
            prose-headings:text-purple-300 prose-code:text-pink-300 
            prose-code:bg-slate-900/50 prose-code:px-1 prose-code:py-0.5 
            prose-code:rounded prose-pre:bg-slate-900/80 prose-pre:border 
            prose-pre:border-purple-500/30 prose-a:text-purple-400 
            prose-strong:text-purple-200 prose-ul:text-gray-300 
            prose-ol:text-gray-300 prose-li:text-gray-300 break-words"
            >
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {review}
              </Markdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Right;
