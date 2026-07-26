"use client";

import { useState } from "react";
import { Play, Copy, Check, Terminal as TerminalIcon, RotateCcw } from "lucide-react";

export function InteractiveTerminal({ title, logs, codeSnippet }) {
  const [activeTab, setActiveTab] = useState("terminal");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputLogs, setOutputLogs] = useState(logs || []);

  const handleCopy = () => {
    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutputLogs((prev) => [
      ...prev,
      { type: "cmd", text: `$ evoq-cli run --environment production` },
      { type: "info", text: `[${new Date().toLocaleTimeString()}] Initializing live runtime sandbox...` },
    ]);

    setTimeout(() => {
      setOutputLogs((prev) => [
        ...prev,
        { type: "success", text: `✔ Task executed in 14ms (100% memory efficient)` },
      ]);
      setIsRunning(false);
    }, 800);
  };

  const handleClear = () => {
    setOutputLogs([]);
  };

  return (
    <div className="w-full bg-[#0d0d11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-neutral-300">
      {/* Mac Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#15151c] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
              activeTab === "terminal"
                ? "bg-white/10 text-white border border-white/10"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Console Output
          </button>
          {codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeTab === "code"
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Source Code
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {activeTab === "terminal" ? (
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-[11px] font-semibold flex items-center gap-1.5 transition-all border border-emerald-500/30"
            >
              <Play className="w-3 h-3" />
              <span>{isRunning ? "Running..." : "Run"}</span>
            </button>
          ) : (
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 text-[11px] font-medium flex items-center gap-1.5 transition-all border border-white/10"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
        {activeTab === "terminal" ? (
          <div className="flex flex-col gap-2">
            <div className="text-neutral-500 mb-2 pb-2 border-b border-white/5 flex items-center justify-between">
              <span>{title || "Evoq Runtime Terminal v2.4.0"}</span>
              <button
                onClick={handleClear}
                className="hover:text-neutral-300 flex items-center gap-1 text-[10px]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            {outputLogs.map((log, i) => (
              <div key={i} className="leading-relaxed flex items-start gap-2">
                {log.type === "cmd" && <span className="text-purple-400 select-none">&gt;</span>}
                {log.type === "success" && <span className="text-emerald-400 select-none">✔</span>}
                {log.type === "warn" && <span className="text-amber-400 select-none">▲</span>}
                {log.type === "info" && <span className="text-sky-400 select-none">ℹ</span>}
                
                <span
                  className={`${
                    log.type === "cmd"
                      ? "text-purple-300 font-semibold"
                      : log.type === "success"
                      ? "text-emerald-300"
                      : log.type === "warn"
                      ? "text-amber-300"
                      : log.type === "info"
                      ? "text-sky-300"
                      : "text-neutral-300"
                  }`}
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
            <code>{codeSnippet}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
