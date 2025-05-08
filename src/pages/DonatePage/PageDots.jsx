export default function PageDots({ total, active }) {
    return (
      <div style={{ display:"flex", gap:4, marginTop:8 }}>
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i === active ? "var(--yellow)" : "#888"
            }}
          />
        ))}
      </div>
    );
  }