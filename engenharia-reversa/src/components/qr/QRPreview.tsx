import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Extension } from '../../types/qr';

interface QRPreviewProps {
  qrRef: React.RefObject<HTMLDivElement | null>;
  download: (ext: Extension) => void;
  downloadJSON: () => void;
}

export const QRPreview: React.FC<QRPreviewProps> = ({ qrRef, download, downloadJSON }) => {
  const [selectedFormat, setSelectedFormat] = useState<Extension>('png');
  const [isExpanded, setIsExpanded] = useState(true);

  const formats: { id: Extension; label: string }[] = [
    { id: 'png', label: 'PNG' },
    { id: 'jpeg', label: 'JPEG' },
    { id: 'svg', label: 'SVG' },
  ];

  return (
    <div className="flex flex-col items-center gap-8 sticky top-8">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[40px] -z-10 opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
        <div 
          ref={qrRef} 
          className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex items-center justify-center min-w-[300px] min-h-[300px]"
        />
      </div>

      <div className="w-full space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-4 text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
          >
            <div className="flex items-center gap-3">
              <span className={isExpanded ? 'text-black' : 'text-gray-500'}>Download Options</span>
            </div>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isExpanded && (
            <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Select Format</span>
                <div className="grid grid-cols-3 gap-2">
                  {formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${
                        selectedFormat === format.id 
                          ? 'border-black bg-black text-white shadow-md' 
                          : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest">{format.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => download(selectedFormat)}
                className="w-full flex items-center justify-center gap-3 p-5 bg-black text-white rounded-2xl hover:bg-gray-800 hover:shadow-xl transition-all group active:scale-[0.98]"
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Download</span>
              </button>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={downloadJSON}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-black transition-all group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">Export Config (JSON)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
