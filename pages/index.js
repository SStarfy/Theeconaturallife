import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Product Grid */}
      <section
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          flex: "1",
        }}
      >
        <Card
          title="Vtopmart Glass Meal-Prep Containers (4-Pack)"
          description="Microwave, oven, freezer safe borosilicate glass with airtight bamboo lids—BPA-free everyday essential."
          href="https://amzn.to/429XdKp"
        />

        <Card
          title="Yomious 20oz Glass Water Bottle with Bamboo Lid"
          description="Leak-proof borosilicate bottle with bamboo lid and silicone seal—eco on-the-go hydration."
          href="https://amzn.to/EXAMPLE"
        />

        <Card
          title="HomArtist Borosilicate Glass Canisters with Bamboo Lids"
          description="Durable glass canisters with airtight bamboo lids—perfect for pantry storage."
          href="https://amzn.to/EXAMPLE"
        />
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#f9f9f9",
          padding: "20px",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <p>
          © {new Date().getFullYear()} EcoNaturalLife. All rights reserved.
        </p>
        <p>
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
        <p>
          <a
            href="/privacy-policy"
            style={{ margin: "0 10px", color: "#2f855a", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            style={{ margin: "0 10px", color: "#2f855a", textDecoration: "none" }}
          >
            Terms of Service
          </a>
          |
          <a
            href="mailto:contact@econaturallife.com"
            style={{ margin: "0 10px", color: "#2f855a", textDecoration: "none" }}
          >
            Contact
          </a>
        </p>
      </footer>
    </main>
  );
}
