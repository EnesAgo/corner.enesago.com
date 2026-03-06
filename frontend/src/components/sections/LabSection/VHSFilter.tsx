'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export default function VHSFilter() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scanlineIntensity, setScanlineIntensity] = useState(0.3);
  const [grainIntensity, setGrainIntensity] = useState(0.15);
  const [colorShift, setColorShift] = useState(2);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const applyVHSEffect = useCallback(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw base image
    ctx.drawImage(image, 0, 0);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Apply VHS effects
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % canvas.width;
      const y = Math.floor(i / 4 / canvas.width);

      // Color shift (chromatic aberration)
      if (colorShift > 0) {
        const shift = Math.floor(colorShift);
        const sourceIndex = i - shift * 4;
        if (sourceIndex >= 0 && sourceIndex < data.length) {
          data[i] = data[sourceIndex]; // Shift red channel
        }
      }

      // Scanlines
      if (scanlineIntensity > 0 && y % 2 === 0) {
        data[i] *= 1 - scanlineIntensity;
        data[i + 1] *= 1 - scanlineIntensity;
        data[i + 2] *= 1 - scanlineIntensity;
      }

      // Noise/grain
      if (grainIntensity > 0) {
        const noise = (Math.random() - 0.5) * grainIntensity * 255;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }

      // Desaturate and adjust contrast
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i] * 0.7 + avg * 0.3;
      data[i + 1] = data[i + 1] * 0.7 + avg * 0.3;
      data[i + 2] = data[i + 2] * 0.7 + avg * 0.3;

      // Increase contrast
      data[i] = ((data[i] - 128) * 1.4 + 128);
      data[i + 1] = ((data[i + 1] - 128) * 1.4 + 128);
      data[i + 2] = ((data[i + 2] - 128) * 1.4 + 128);

      // Darken
      data[i] *= 0.65;
      data[i + 1] *= 0.65;
      data[i + 2] *= 0.65;
    }

    ctx.putImageData(imageData, 0, 0);
  }, [image, scanlineIntensity, grainIntensity, colorShift]);

  useEffect(() => {
    if (image) {
      applyVHSEffect();
    }
  }, [image, applyVHSEffect]);

  const handleFileSelect = useCallback((file: File) => {
    setError(null);

    // Check for HEIC/HEIF files (not supported by browsers)
    if (file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif') || file.type === 'image/heic' || file.type === 'image/heif') {
      setError('HEIC format not supported. Please convert to JPG or PNG first.');
      return;
    }

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setError(null);
        };
        img.onerror = () => {
          setError('Failed to load image. Try a different format (JPG, PNG, WebP).');
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      setError('Please select a valid image file (JPG, PNG, WebP, GIF).');
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  const handleDownload = useCallback(() => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vhs-effect.png';
    a.click();
  }, []);

  if (!isExpanded) {
    return (
      <>
        <div style={{ border: '2px solid #111', overflow: 'hidden', height: 72, position: 'relative', marginBottom: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=400&h=200&fit=crop" alt="vhs" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.4) saturate(.25) brightness(.65)' }} />
          <div className="vhs" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', top: 6, right: 8, fontFamily: "'VT323', monospace", fontSize: 14, color: 'rgba(255,45,120,.85)' }}>VHS ●</div>
        </div>
        <button
          onClick={() => setIsExpanded(true)}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', background: '#FFE500', border: '2px solid #000', padding: '6px 14px', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', cursor: 'pointer', width: '100%' }}
        >
          TRY IT →
        </button>
      </>
    );
  }

  return (
    <>
      {!image ? (
        <>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onClick={() => fileInputRef.current?.click()}
            style={{ border: error ? '2px dashed #FF2D78' : '2px dashed #333', padding: 24, background: '#080808', marginBottom: error ? 8 : 14, textAlign: 'center', cursor: 'pointer', minHeight: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}
          >
            <div style={{ fontSize: 32, opacity: 0.3 }}>{error ? '⚠️' : '📸'}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: error ? '#FF2D78' : '#666', textTransform: 'uppercase', letterSpacing: 1 }}>
              {error ? 'UPLOAD FAILED' : 'DROP IMAGE HERE'}
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>
              {error ? 'try again' : 'or click to browse'}
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#444', marginTop: 4 }}>
              supports: JPG, PNG, WebP, GIF
            </div>
          </div>
          {error && (
            <div style={{ marginBottom: 14, padding: '8px 12px', background: '#1a0008', border: '1px solid #FF2D78', borderRadius: 2 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#FF2D78', lineHeight: 1.6 }}>
                ⚠ {error}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div style={{ border: '2px solid #111', overflow: 'hidden', position: 'relative', marginBottom: 14, background: '#000' }}>
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 200, objectFit: 'contain' }}
            />
            <div className="vhs" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 6, right: 8, fontFamily: "'VT323', monospace", fontSize: 14, color: 'rgba(255,45,120,.85)' }}>VHS ●</div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
              <span>SCANLINES:</span>
              <span style={{ color: '#FFE500' }}>{Math.round(scanlineIntensity * 100)}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={scanlineIntensity * 100}
              onChange={(e) => setScanlineIntensity(parseInt(e.target.value) / 100)}
              style={{ width: '100%', accentColor: '#FFE500', cursor: 'pointer' }}
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
              <span>GRAIN:</span>
              <span style={{ color: '#FFE500' }}>{Math.round(grainIntensity * 100)}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={grainIntensity * 100}
              onChange={(e) => setGrainIntensity(parseInt(e.target.value) / 100)}
              style={{ width: '100%', accentColor: '#FFE500', cursor: 'pointer' }}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
              <span>COLOR SHIFT:</span>
              <span style={{ color: '#FFE500' }}>{colorShift}px</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={colorShift}
              onChange={(e) => setColorShift(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#FFE500', cursor: 'pointer' }}
            />
          </div>
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
        onChange={handleFileInput}
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', gap: 6 }}>
        <button
          onClick={() => {
            setImage(null);
            setError(null);
            setIsExpanded(false);
          }}
          style={{
            flex: 1,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#555',
            background: 'transparent',
            border: '2px solid #222',
            padding: '6px 10px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all .15s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#FFE500';
            e.currentTarget.style.color = '#FFE500';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#222';
            e.currentTarget.style.color = '#555';
          }}
        >
          {image ? 'RESET' : 'CLOSE'}
        </button>
        {image && (
          <button
            onClick={handleDownload}
            style={{
              flex: 1,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              color: '#000',
              background: '#FFE500',
              border: '2px solid #000',
              padding: '6px 10px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            DOWNLOAD
          </button>
        )}
      </div>
    </>
  );
}
