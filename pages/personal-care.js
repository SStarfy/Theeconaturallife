export default function PersonalCare() {
  const items = [
    {
      name: "Bamboo toothbrush",
      description: "Plant-based bristles and bamboo handle",
      url: "https://www.amazon.com/SeaTurtle-Plant-Based-Bristles-Bamboo-Toothbrush/dp/B08R257HX7?&tag=econaturall01-20",
      notes: "Fully biodegradable handle; no plastic bristles",
    },
    {
      name: "Dental Lace silk floss",
      description: "Refillable glass dispenser with candelilla-waxed silk floss",
      url: "https://www.amazon.com/Dental-Lace-Refillable-Recyclable-Dispenser/dp/B074W8516Q?&tag=econaturall01-20",
      notes: "Silk floss; plastic-free packaging (not vegan)",
    },
    {
      name: "Metal safety razor",
      description: "Stainless steel handle and double-edge blades",
      url: "https://www.amazon.com/Bambaw-Metal-Safety-Razor-Silver/dp/B07XJQZKL2?&tag=econaturall01-20",
      notes: "Reusable; no plastic cartridges",
    },
    {
      name: "Shampoo bar",
      description: "Ethique Everyday Shampoo Bar (sulfate-free) with paper packaging",
      url: "https://www.amazon.com/Ethique-Everyday-Shampoo-shiny-Vitamin/dp/B0DHFPB45C?&tag=econaturall01-20",
      notes: "Plastic-free packaging; SLS/paraben-free",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Personal Care</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl p-6 flex flex-col justify-between bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.description}
              </p>
              {item.notes && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.notes}
                </p>
              )}
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-4 inline-block text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
