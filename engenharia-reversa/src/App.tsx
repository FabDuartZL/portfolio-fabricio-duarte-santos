/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MainLayout } from './components/layout/MainLayout';
import { QRControls } from './components/qr/QRControls';
import { QRPreview } from './components/qr/QRPreview';
import { useQRCode } from './hooks/useQRCode';

export default function App() {
  const { ref, options, updateOptions, download, downloadJSON, onImageUpload } = useQRCode();

  return (
    <MainLayout accentColor={options.dotsOptions?.color}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <QRControls 
            options={options} 
            updateOptions={updateOptions} 
            onImageUpload={onImageUpload} 
          />
        </div>
        <div className="lg:col-span-5">
          <QRPreview 
            qrRef={ref} 
            download={download} 
            downloadJSON={downloadJSON}
          />
        </div>
      </div>
    </MainLayout>
  );
}
