export default function SectionDivider({ variant = 'wave', fromColor = '#0f1b2d', toColor = '#faf7f0' }) {
  const height = 80

  const paths = {
    wave: `M0,${height} C360,${height * 0.2} 720,${height * 0.8} 1440,0 L1440,${height} L0,${height} Z`,
    curve: `M0,${height} Q720,${-height * 0.3} 1440,${height} L1440,${height} L0,${height} Z`,
    diagonal: `M0,${height} L1440,0 L1440,${height} L0,${height} Z`,
  }

  return (
    <div
      className="section-divider"
      style={{
        position: 'relative',
        height: `${height}px`,
        background: fromColor,
        overflow: 'hidden',
        lineHeight: 0,
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <path d={paths[variant] || paths.wave} fill={toColor} />
      </svg>
    </div>
  )
}
