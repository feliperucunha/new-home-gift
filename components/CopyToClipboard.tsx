// CopyToClipboard.js

import { useState } from 'react';

const CopyToClipboard = ({ text }: any) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5s
  };

  const snippet = text.slice(0, 20) + (text.length > 20 ? "..." : "");

  return (
    <div className="flex items-center justify-between">
      <div className="mr-2 flex-shrink-0">
        <span className="text-gray-600">{snippet}</span>
      </div>
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
