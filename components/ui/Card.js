export default function Card({ title, description, notes, href = "#" }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <h3 style={{ marginBottom: "12px", fontSize: "1.25rem", fontWeight: "600" }}>
        {title}
      </h3>
      <p style={{ marginBottom: notes ? "12px" : "20px", color: "#555", lineHeight: "1.5" }}>
        {description}
      </p>
      {notes && (
        <p style={{ marginBottom: "20px", color: "#777", lineHeight: "1.5" }}>
          {notes}
        </p>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 18px",
          background: "#2f855a",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
          alignSelf: "flex-start",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#276749")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2f855a")}
      >
        Buy on Amazon
      </a>
    </div>
  );
}
