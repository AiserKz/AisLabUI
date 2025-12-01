import React, { useCallback } from "react";
import { bgVariants, textBgContent } from "../ui.types";

interface CodeMockupProps {
  text?: string;
  variant?: keyof typeof bgVariants;
  copy?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function CodeMockup({
  text,
  variant = "default",
  copy = false,
  className = "",
  children,
}: CodeMockupProps) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const childrenText = React.Children.toArray(children)
    .map((c) => (typeof c === "string" ? c : ""))
    .join("\n");

  const lines = text ? [text] : childrenText.split("\n");

  const handleCopy = useCallback(() => {
    const code =
      text || (typeof children === "string" ? children : lines.join("\n"));
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 4000);
    });
  }, [text, children]);

  return (
    <div
      className={`mockup-code ${className} ${bgVariants[variant]} ${textBgContent[variant]} relative`}
    >
      {copy && (
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 text-xs cursor-pointer p-2 rounded-field hover:bg-base-200/50 transition-all duration-300 hover:scale-110"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      )}
      {lines.length > 0 ? (
        lines.map((line, i) => (
          <pre key={i} data-prefix={i === 0 ? "$" : i}>
            <code>{line}</code>
          </pre>
        ))
      ) : (
        <pre data-prefix="$">
          <code>{text}</code>
        </pre>
      )}
    </div>
  );
}
