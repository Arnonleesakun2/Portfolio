"use client";

import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { HTMLAttributes, DetailedHTMLProps } from "react";

interface Props {
  content: string;
}

interface CodeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const language = className?.replace("language-", "") || "";

  if (inline) {
    return (
      <code className="bg-base-200 text-sm rounded px-1" {...props}>
        {children}
      </code>
    );
  }

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative card bg-base-300 rounded-xl shadow-md my-4">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          className="btn btn-xs btn-ghost"
          type="button"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
      <pre className="text-sm p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      block.classList.add("hljs");
    });
  }, [content]);

  return (
    <div className="prose max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: CodeBlock, // ✅ ใช้ Component ที่แยกออกมาถูกต้อง
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
