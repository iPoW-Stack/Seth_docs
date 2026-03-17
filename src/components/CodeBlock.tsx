import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-[rgba(148,163,184,0.18)] bg-[#0b1220] my-4 shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,168,85,0.65),rgba(36,196,255,0.65),transparent)]"></div>
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#111827] border-b border-[#1f2937]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]"></span>
          </div>
          <span className="text-[13px] font-mono uppercase tracking-[0.18em] text-gray-400">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-[15px] font-mono text-slate-200 m-0 leading-8">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
