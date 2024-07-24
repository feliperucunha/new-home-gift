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
          className="px-4 py-2 bg-[#c19157] text-white rounded-md shadow-sm hover:bg-[#c19157] focus:outline-none focus:ring-2 focus:ring-[#c19157] focus:ring-opacity-50"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
