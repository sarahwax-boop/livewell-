// No "use client" needed — this is a server component used by loading.tsx
// All styles are inline so it works before globals.css is applied

export default function PageLoader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0d0d0b", // --dark hardcoded, no CSS var needed
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        gap: 20,
      }}
    >
      {/* Wordmark */}
      <p
        style={{
          fontFamily: "'Bricolage Grotesque', Georgia, serif",
          fontSize: 26,
          fontWeight: 300,
          letterSpacing: "-0.01em",
          color: "#fff",
          margin: 0,
        }}
      >
        Live<span style={{ color: "#c8a96a" }}>·</span>Well
      </p>

      {/* Animated gold bar */}
      <div
        style={{
          width: 100,
          height: 2,
          background: "rgba(255,255,255,0.10)",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "40%",
            background: "#c8a96a",
            borderRadius: 2,
            animation: "lw-slide 1.2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes lw-slide {
          0%   { left: -40%; }
          100% { left: 140%; }
        }
      `}</style>
    </div>
  );
}
