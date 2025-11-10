import Card from '../components/ui/Card';

export default function PersonalCare() {
  const items = [
    {
      name: 'SeaTurtle Bamboo Toothbrush',
      description: 'Castor-bean bristles & bamboo handle',
      notes: 'Plant-based bristles and bamboo handle; plastic-free packaging; no SLS or BPA.',
      url: 'https://www.amazon.com/SeaTurtle-Plant-Based-Bristles-Bamboo-Toothbrush/dp/B08R2S7HX7',
    },
    {
      name: 'Dental Lace Refillable Silk Floss',
      description: 'Silk floss in glass vial (plastic-free)',
      notes: 'Silk floss with candelilla wax; refillable glass dispenser; compostable and plastic-free.',
      url: 'https://www.amazon.com/Dental-Lace-Refillable-Recyclable-Dispenser/dp/B07AW8516Q',
    },
    {
      name: 'Bambaw Metal Safety Razor',
      description: 'Reusable stainless safety razor',
      notes: 'Stainless steel razor replaces disposable plastic cartridges; fully recyclable; zero plastic waste.',
      url: 'https://www.amazon.com/Bambaw-Metal-Safety-Razor-Silver/dp/B07XJQ2KL2',
    },
    {
      name: 'Ethique Everyday Shampoo Bar',
      description: 'Sulfate-free shampoo bar',
      notes: 'Salon-quality shampoo bar with no sulfates or parabens; packaged in compostable paper; no plastic bottle.',
      url: 'https://www.amazon.com/Ethique-Everyday-Shampoo-shiny-Vitamin/dp/B09G8RXV8B',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Personal Care</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            description={item.description}
            notes={item.notes}
            href={item.url}
          />
        ))}
      </div>
    </div>
  );
}
