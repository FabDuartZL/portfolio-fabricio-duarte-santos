import React, { useState } from 'react';
import { QRState, DotType, CornerSquareType, CornerDotType } from '../../types/qr';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QRControlsProps {
  options: QRState;
  updateOptions: (options: Partial<QRState>) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const QRControls: React.FC<QRControlsProps> = ({ options, updateOptions, onImageUpload }) => {
  const [activeSection, setActiveSection] = useState<string | null>('data');

  const dotTypes: DotType[] = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];
  const cornerSquareTypes: CornerSquareType[] = ['square', 'dot', 'extra-rounded'];
  const cornerDotTypes: CornerDotType[] = ['square', 'dot'];

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const SectionHeader = ({ id, title }: { id: string, title: string }) => (
    <button
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between py-4 text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-100 hover:bg-gray-50 transition-colors px-2 rounded-t-xl"
    >
      <div className="flex items-center gap-3">
        <span className={activeSection === id ? 'text-black' : 'text-gray-500'}>{title}</span>
      </div>
      {activeSection === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );

  return (
    <div className="space-y-4 bg-[#f8f9fa] p-6 rounded-3xl border border-gray-200 shadow-sm">
      {/* 1. Data Input Section (Main Options) */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="data" title="Data Content" />
        {activeSection === 'data' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Text / URL</label>
              <input
                type="text"
                value={options.data}
                onChange={(e) => updateOptions({ data: e.target.value })}
                placeholder="Enter URL or text"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none text-gray-700"
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Image File</label>
              <div className="relative group">
                <input
                  type="file"
                  onChange={onImageUpload}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full py-4 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center gap-1 group-hover:border-black transition-colors bg-gray-50">
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-black transition-colors uppercase tracking-widest">
                    Choose File
                  </span>
                </div>
              </div>
              {options.image && (
                <button 
                  onClick={() => updateOptions({ image: undefined })}
                  className="text-[9px] font-bold text-red-500 uppercase tracking-widest hover:underline"
                >
                  Remove Current Image
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Width</label>
                <input
                  type="number"
                  value={options.width}
                  onChange={(e) => updateOptions({ width: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Height</label>
                <input
                  type="number"
                  value={options.height}
                  onChange={(e) => updateOptions({ height: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Margin</label>
                <input
                  type="number"
                  value={options.margin}
                  onChange={(e) => updateOptions({ margin: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. Dots Styling Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="dots" title="Dots Options" />
        {activeSection === 'dots' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-3 gap-2">
              {dotTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => updateOptions({ dotsOptions: { type } })}
                  className={`px-2 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-lg border transition-all ${
                    options.dotsOptions?.type === type
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={options.dotsOptions?.color}
                    onChange={(e) => updateOptions({ dotsOptions: { color: e.target.value } })}
                    className="w-10 h-10 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                  />
                  <span className="text-xs font-mono text-gray-500 uppercase">{options.dotsOptions?.color}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Corners Square Options Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="corners-square" title="Corners Square Options" />
        {activeSection === 'corners-square' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Style */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Corners Square Style</label>
              <div className="grid grid-cols-3 gap-2">
                {['square', 'dot', 'extra-rounded'].map((type) => (
                  <button
                    key={type}
                    onClick={() => updateOptions({ cornersSquareOptions: { type: type as CornerSquareType } })}
                    className={`px-2 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-lg border transition-all ${
                      options.cornersSquareOptions?.type === type
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Type & Gradient */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Color Type</span>
                <div className="flex bg-gray-200 p-1 rounded-lg">
                  <button 
                    onClick={() => updateOptions({ cornersSquareOptions: { gradient: undefined } })}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${!options.cornersSquareOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                  >Single Color</button>
                  <button 
                    onClick={() => updateOptions({ cornersSquareOptions: { gradient: { type: 'linear', rotation: 0, colorStops: [{ offset: 0, color: options.cornersSquareOptions?.color || '#000000' }, { offset: 1, color: '#ffffff' }] } } })}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.cornersSquareOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                  >Gradient</button>
                </div>
              </div>

              {!options.cornersSquareOptions?.gradient ? (
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={options.cornersSquareOptions?.color}
                    onChange={(e) => updateOptions({ cornersSquareOptions: { color: e.target.value } })}
                    className="w-8 h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                  />
                  <span className="text-xs font-mono text-gray-500 uppercase">{options.cornersSquareOptions?.color}</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gradient Type</span>
                    <div className="flex bg-gray-200 p-1 rounded-lg">
                      <button 
                        onClick={() => updateOptions({ cornersSquareOptions: { gradient: { type: 'linear' } } })}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.cornersSquareOptions.gradient.type === 'linear' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                      >Linear</button>
                      <button 
                        onClick={() => updateOptions({ cornersSquareOptions: { gradient: { type: 'radial' } } })}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.cornersSquareOptions.gradient.type === 'radial' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                      >Radial</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase">Start Color</label>
                      <input
                        type="color"
                        value={options.cornersSquareOptions.gradient.colorStops[0].color}
                        onChange={(e) => {
                          const stops = [...options.cornersSquareOptions!.gradient!.colorStops];
                          stops[0].color = e.target.value;
                          updateOptions({ cornersSquareOptions: { gradient: { colorStops: stops } } });
                        }}
                        className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase">End Color</label>
                      <input
                        type="color"
                        value={options.cornersSquareOptions.gradient.colorStops[1].color}
                        onChange={(e) => {
                          const stops = [...options.cornersSquareOptions!.gradient!.colorStops];
                          stops[1].color = e.target.value;
                          updateOptions({ cornersSquareOptions: { gradient: { colorStops: stops } } });
                        }}
                        className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rotation */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rotation (Degrees)</label>
              <input
                type="number"
                value={options.cornersSquareOptions?.gradient?.rotation || 0}
                disabled={!options.cornersSquareOptions?.gradient}
                onChange={(e) => {
                  if (options.cornersSquareOptions?.gradient) {
                    updateOptions({ cornersSquareOptions: { gradient: { rotation: Number(e.target.value) } } });
                  }
                }}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
              <p className="text-[9px] text-gray-400">Rotation only applies to gradients.</p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Corners Dot Options Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="corners-dot" title="Corners Dot Options" />
        {activeSection === 'corners-dot' && (
          <div className="p-6 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Dot Type */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dot Type</label>
              <div className="grid grid-cols-2 gap-2">
                {cornerDotTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => updateOptions({ cornersDotOptions: { type } })}
                    className={`px-2 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-lg border transition-all ${
                      options.cornersDotOptions?.type === type
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Color Type</span>
                  <div className="flex bg-gray-200 p-1 rounded-lg">
                    <button 
                      onClick={() => updateOptions({ cornersDotOptions: { gradient: undefined } })}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${!options.cornersDotOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                    >Single Color</button>
                    <button 
                      onClick={() => updateOptions({ cornersDotOptions: { gradient: { type: 'linear', rotation: 0, colorStops: [{ offset: 0, color: options.cornersDotOptions?.color || '#000000' }, { offset: 1, color: '#ffffff' }] } } })}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.cornersDotOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                    >Gradient</button>
                  </div>
                </div>

                {!options.cornersDotOptions?.gradient ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={options.cornersDotOptions?.color}
                      onChange={(e) => updateOptions({ cornersDotOptions: { color: e.target.value } })}
                      className="w-8 h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                    />
                    <span className="text-xs font-mono text-gray-500 uppercase">{options.cornersDotOptions?.color}</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase">Start</label>
                        <input
                          type="color"
                          value={options.cornersDotOptions.gradient.colorStops[0].color}
                          onChange={(e) => {
                            const stops = [...options.cornersDotOptions!.gradient!.colorStops];
                            stops[0].color = e.target.value;
                            updateOptions({ cornersDotOptions: { gradient: { colorStops: stops } } });
                          }}
                          className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase">End</label>
                        <input
                          type="color"
                          value={options.cornersDotOptions.gradient.colorStops[1].color}
                          onChange={(e) => {
                            const stops = [...options.cornersDotOptions!.gradient!.colorStops];
                            stops[1].color = e.target.value;
                            updateOptions({ cornersDotOptions: { gradient: { colorStops: stops } } });
                          }}
                          className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase">Rotation (Degrees)</label>
                      <input 
                        type="number"
                        value={options.cornersDotOptions.gradient.rotation}
                        onChange={(e) => updateOptions({ cornersDotOptions: { gradient: { rotation: Number(e.target.value) } } })}
                        className="w-full px-3 py-2 bg-gray-200 border border-gray-100 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Background Options Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="background" title="Background Options" />
        {activeSection === 'background' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Color Type & Gradient */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Color Type</span>
                <div className="flex bg-gray-200 p-1 rounded-lg">
                  <button 
                    onClick={() => updateOptions({ backgroundOptions: { gradient: undefined } })}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${!options.backgroundOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                  >Single Color</button>
                  <button 
                    onClick={() => updateOptions({ backgroundOptions: { gradient: { type: 'linear', rotation: 0, colorStops: [{ offset: 0, color: options.backgroundOptions?.color || '#ffffff' }, { offset: 1, color: '#e6e6e6' }] } } })}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.backgroundOptions?.gradient ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                  >Gradient</button>
                </div>
              </div>

              {!options.backgroundOptions?.gradient ? (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Background Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={options.backgroundOptions?.color}
                      onChange={(e) => updateOptions({ backgroundOptions: { color: e.target.value } })}
                      className="w-10 h-10 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                    />
                    <span className="text-xs font-mono text-gray-500 uppercase">{options.backgroundOptions?.color}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gradient Type</span>
                    <div className="flex bg-gray-200 p-1 rounded-lg">
                      <button 
                        onClick={() => updateOptions({ backgroundOptions: { gradient: { type: 'linear' } } })}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.backgroundOptions.gradient.type === 'linear' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                      >Linear</button>
                      <button 
                        onClick={() => updateOptions({ backgroundOptions: { gradient: { type: 'radial' } } })}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${options.backgroundOptions.gradient.type === 'radial' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                      >Radial</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase">Start Color</label>
                      <input
                        type="color"
                        value={options.backgroundOptions.gradient.colorStops[0].color}
                        onChange={(e) => {
                          const stops = [...options.backgroundOptions!.gradient!.colorStops];
                          stops[0].color = e.target.value;
                          updateOptions({ backgroundOptions: { gradient: { colorStops: stops } } });
                        }}
                        className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase">End Color</label>
                      <input
                        type="color"
                        value={options.backgroundOptions.gradient.colorStops[1].color}
                        onChange={(e) => {
                          const stops = [...options.backgroundOptions!.gradient!.colorStops];
                          stops[1].color = e.target.value;
                          updateOptions({ backgroundOptions: { gradient: { colorStops: stops } } });
                        }}
                        className="w-full h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rotation */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rotation (Degrees)</label>
              <input
                type="number"
                value={options.backgroundOptions?.gradient?.rotation || 0}
                disabled={!options.backgroundOptions?.gradient}
                onChange={(e) => {
                  if (options.backgroundOptions?.gradient) {
                    updateOptions({ backgroundOptions: { ...options.backgroundOptions, gradient: { ...options.backgroundOptions.gradient, rotation: Number(e.target.value) } } });
                  }
                }}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
              <p className="text-[9px] text-gray-400">Rotation only applies to gradients.</p>
            </div>
          </div>
        )}
      </div>

      {/* 6. Image Options Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="logo" title="Image Options" />
        {activeSection === 'logo' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer" htmlFor="hide-dots">
                Hide Background Dots
              </label>
              <input
                id="hide-dots"
                type="checkbox"
                checked={options.imageOptions?.hideBackgroundDots}
                onChange={(e) => updateOptions({ 
                  imageOptions: { ...options.imageOptions, hideBackgroundDots: e.target.checked } 
                })}
                className="w-4 h-4 accent-black cursor-pointer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Image Size</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="1"
                  value={options.imageOptions?.imageSize}
                  onChange={(e) => updateOptions({ 
                    imageOptions: { ...options.imageOptions, imageSize: Number(e.target.value) } 
                  })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Margin (px)</label>
                <input
                  type="number"
                  value={options.imageOptions?.margin}
                  onChange={(e) => updateOptions({ 
                    imageOptions: { ...options.imageOptions, margin: Number(e.target.value) } 
                  })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 7. QR Options Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <SectionHeader id="qr-options" title="QR Options" />
        {activeSection === 'qr-options' && (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Type Number */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type Number</label>
              <input
                type="number"
                min="0"
                max="40"
                value={options.qrOptions?.typeNumber}
                onChange={(e) => updateOptions({ 
                  qrOptions: { typeNumber: Number(e.target.value) } 
                })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
              <p className="text-[9px] text-gray-400">0 means auto-detection.</p>
            </div>

            {/* Mode */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mode</label>
              <div className="grid grid-cols-2 gap-2">
                {['Numeric', 'Alphanumeric', 'Byte', 'Kanji'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => updateOptions({ 
                      qrOptions: { mode: mode as any } 
                    })}
                    className={`px-2 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-lg border transition-all ${
                      options.qrOptions?.mode === mode
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Correction Level */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Error Correction Level</label>
              <div className="grid grid-cols-4 gap-2">
                {['L', 'M', 'Q', 'H'].map((level) => (
                  <button
                    key={level}
                    onClick={() => updateOptions({ 
                      qrOptions: { errorCorrectionLevel: level as any } 
                    })}
                    className={`px-2 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-lg border transition-all ${
                      options.qrOptions?.errorCorrectionLevel === level
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <p className="text-[9px] text-gray-400">H (High) is recommended when using a logo.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
