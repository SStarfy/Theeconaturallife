export default function Card({ title, description, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "var(--white)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease"
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ margin: 0, color: "#555" }}>{description}</p>
    </a>
  );
}
