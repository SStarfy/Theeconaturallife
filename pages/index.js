import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2e7d32" }}>EcoNaturalLife</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Curated products that help you live sustainably and reduce microplastic exposure.
        </p>
      </header>
      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        }}
      >
        <Card
          title="Glass Food Storage Containers – Plastic-Free"
          description="Durable borosilicate glass with airtight bamboo lids that double as cutting boards – microwave, oven, freezer, and dishwasher safe (remove lids)."
          href="https://amzn.to/3UVNweK"
        />
      </section>
      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
        © {new Date().getFullYear()} EcoNaturalLife — As an Amazon Associate, I earn from qualifying purchases.
      </footer>
    </main>
  );
}
