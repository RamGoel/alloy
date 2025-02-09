'use client';

import { Clipboard } from 'lucide-react';
import { DiceCmdMeta } from '@/data/command';
import { useState } from 'react';

interface CommandPageProps extends DiceCmdMeta {
  onCopy?: () => void;
}

export default function CommandPage({
  title,
  syntax,
  body,
  url,
  onCopy,
}: CommandPageProps) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    navigator.clipboard.writeText(syntax).then(() => {
      if (onCopy) {
        onCopy();
      }
    });
  };

  return (
    <div
      data-testid="command-page"
      className="w-full p-6 text-text_primary rounded-lg border border-border mb-4"
    >
      <h2 data-testid="command-title" className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <div className="flex items-center justify-between mb-4 pt-4">
        <h3 className="text-xl font-semibold">Syntax</h3>
        <div className="flex flex-row">
          {isCopied && (
            <div
              data-testid="copied-message"
              className="text-green-500 text-sm"
            >
              Copied!
            </div>
          )}
          <button
            onClick={handleCopy}
            className="text-text_secondary hover:text-text_primary flex items-center ml-4"
            title="Copy to clipboard"
            data-testid="copy-button"
          >
            <Clipboard className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-foreground rounded-lg relative overflow-x-auto p-4">
        <code
          data-testid="command-syntax"
          className="font-mono text-sm block w-full"
        >
          {syntax}
        </code>
      </div>

      <h2 className="text-xl font-semibold pt-4 mb-4">Description</h2>
      <div className="bg-foreground p-4 rounded-lg mb-4">
        <p data-testid="command-body" className="text-md ">
          {body}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200"
        data-testid="command-link"
      >
        View Documentation
      </a>
    </div>
  );
}
