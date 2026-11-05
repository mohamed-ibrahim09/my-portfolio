import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: '#09090B',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(124,58,237,0.22) 0%, transparent 70%)',
          }}
        />

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              transform: 'rotate(45deg)',
              border: '4px solid #7C3AED',
              boxShadow: '0 0 40px rgba(124,58,237,0.35)',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
              Mohamed <span style={{ color: '#C4B5FD' }}>Elhadad</span>
            </div>
            <div style={{ fontSize: 28, color: 'rgba(226,232,240,0.75)' }}>
              DevOps Engineer @ ALGOcas · AWS · Kubernetes · CI/CD
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

