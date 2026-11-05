import { ImageResponse } from 'next/og'

export const alt = 'Mohamed Elhadad — DevOps Engineer | AWS, CI/CD, Kubernetes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const green = '#00ff41'

export default function OpenGraphImage() {
  const lines: { text: string; color: string; bold?: boolean }[] = [
    { text: '$ whoami', color: green, bold: true },
    { text: 'Mohamed Elhadad', color: '#ffffff', bold: true },
    { text: '$ cat role.txt', color: green, bold: true },
    { text: 'DevOps Engineer @ ALGOcas', color: '#e2e8f0' },
    { text: 'AWS Certified Solutions Architect – Associate', color: '#e2e8f0' },
    { text: '$ ls ~/skills', color: green, bold: true },
    { text: 'AWS · Kubernetes · Docker · CI/CD · AI Agents', color: '#4ade80' },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0e0a',
          padding: 56,
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            border: `2px solid ${green}`,
            borderRadius: 12,
            boxShadow: '0 0 60px rgba(0,255,65,0.25)',
            background: '#050805',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 20px',
              borderBottom: '1px solid rgba(0,255,65,0.35)',
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#ff5f57' }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#febc2e' }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#28c840' }} />
            <div style={{ marginLeft: 16, color: 'rgba(0,255,65,0.7)', fontSize: 22 }}>
              elhadad@portfolio:~$
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '28px 36px', gap: 10 }}>
            {lines.map((l) => (
              <div
                key={l.text}
                style={{ color: l.color, fontSize: 38, fontWeight: l.bold ? 700 : 400, display: 'flex' }}
              >
                {l.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
