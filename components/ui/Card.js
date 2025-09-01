import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main style={{ display: "grid", gap: "20px" }}>
      <Card
        title="Vtopmart Glass Meal-Prep Containers (4-Pack) with Bamboo Lids"
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
    </main>
  );
}
