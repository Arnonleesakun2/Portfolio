"use client";

import { useEffect } from "react";
import hljs from "highlight.js";

type Block = {
  type: "text" | "code" | "terminal";
  content: string;
};

function parseContent(text: string): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let buffer: string[] = [];
  let currentType: Block["type"] = "text";

  const isCodeLine = (line: string) =>
    /^[ \t]|^const|^let|^function|^\{|^\}|^console|=>|<.*?>/.test(line);
  const isTerminalLine = (line: string) =>
    /^\$ ?/.test(line) ||
    /^(npm |yarn |pnpm |npx |git |composer |bash |sudo )/.test(line);
  lines.forEach((line) => {
    const lineIsTerminal = isTerminalLine(line);
    const lineIsCode = isCodeLine(line);

    let newType: Block["type"] = "text";
    if (lineIsTerminal) newType = "terminal";
    else if (lineIsCode) newType = "code";

    if (line.trim() === "") {
      if (buffer.length) {
        blocks.push({ type: currentType, content: buffer.join("\n") });
        buffer = [];
      }
      currentType = "text";
    } else if (newType !== currentType) {
      if (buffer.length) {
        blocks.push({ type: currentType, content: buffer.join("\n") });
        buffer = [];
      }
      currentType = newType;
      buffer.push(line);
    } else {
      buffer.push(line);
    }
  });

  if (buffer.length) {
    blocks.push({ type: currentType, content: buffer.join("\n") });
  }

  return blocks;
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = parseContent(content);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="prose max-w-none">
      {blocks.map((block, i) => {
        if (block.type === "code") {
          const result = hljs.highlightAuto(block.content);
          return (
            <pre
              className="bg-base-300 p-4 rounded-xl my-4 overflow-x-auto"
              key={i}
            >
              <code
                className={`language-${result.language}`}
                dangerouslySetInnerHTML={{ __html: result.value }}
              />
            </pre>
          );
        } else if (block.type === "terminal") {
          return (
            <pre
              className="bg-gray-900 text-green-300 p-4 rounded-xl my-4 overflow-x-auto text-sm"
              key={i}
            >
              <code>{block.content}</code>
            </pre>
          );
        } else {
          return <p key={i}>{block.content}</p>;
        }
      })}
    </div>
  );
}
