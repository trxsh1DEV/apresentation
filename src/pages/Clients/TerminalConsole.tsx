import React from "react";
import { LoadingSpinner } from "@/components/ui/myIsLoading";

interface TerminalConsoleProps {
  data: string;
  isLoading: boolean;
}

const TerminalConsole: React.FC<TerminalConsoleProps> = ({
  data,
  isLoading,
}) => {
  return (
    <div className="bg-black text-green-400 font-mono rounded-lg shadow-lg overflow-hidden h-full">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-gray-400">Terminal Output</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 h-full overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner />
            <p className="ml-2 text-white">Processando comando...</p>
          </div>
        ) : (
          <pre className="whitespace-pre-wrap break-words">{data}</pre>
        )}
      </div>
    </div>
  );
};

export default TerminalConsole;
