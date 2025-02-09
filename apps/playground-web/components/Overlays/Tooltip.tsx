import React, { useState } from 'react';
import { Info } from 'lucide-react';

// Step 1: Define the interface for the props
interface TooltipProps {
  message: string; // Specify that message should be a string
}

// Step 2: Use the defined interface in the component
const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  // State to manage tooltip visibility
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex items-center">
      {/* (i) Icon */}
      <span
        className="flex items-center justify-center text-text_secondary cursor-pointer hover:text-text_primary"
        onMouseEnter={() => setVisible(true)} // Show tooltip on hover over icon
        onMouseLeave={() => setVisible(false)} // Hide tooltip when not hovering
      >
        <Info className="w-5 h-5" />
      </span>

      {/* Tooltip Content */}
      {visible && (
        <div className="absolute bottom-full mb-1 w-48 p-2 text-xs text-text_primary bg-[#374151] rounded shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
