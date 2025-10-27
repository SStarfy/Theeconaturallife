export default function PersonalCare() {
  const items = [
    {
      name: 'SeaTurtle Bamboo Toothbrush',
      description: 'Castor‑bean bristles & bamboo handle',
      url: 'https://www.amazon.com/SeaTurtle-Plant-Based-Bristles-Bamboo-Toothbrush/dp/B08R257HX7?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=07273786f1c6903f2bb5d7d41668dadb&language=en_US&ref_=as_li_ss_tl',
      notes: 'Plant‑based bristles and bamboo handle; plastic‑free packaging; no SLS or BPA.',
    },
    {
      name: 'Dental Lace Refillable Silk Floss',
      description: 'Silk floss in glass vial (plastic‑free)',
      url: 'https://www.amazon.com/Dental-Lace-Refillable-Recyclable-Dispenser/dp/B074W8516Q?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=5056c88dcc042f4a605a7333547c39e9&language=en_US&ref_=as_li_ss_tl',
      notes: 'Silk floss with candelilla wax; refillable glass dispenser; compostable and plastic‑free.',
    },
    {
      name: 'Bambaw Metal Safety Razor',
      description: 'Reusable stainless safety razor',
      url: 'https://www.amazon.com/Bambaw-Metal-Safety-Razor-Silver/dp/B07XJQZKL2?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=4cd8a7501bc0d0a5a2993da1bdc8ffa2&language=en_US&ref_=as_li_ss_tl',
      notes: 'Stainless steel razor replaces disposable plastic cartridges; fully recyclable; zero plastic waste.',
    },
    {
      name: 'Ethique Everyday Shampoo Bar',
      description: 'Sulfate‑free shampoo bar',
      url: 'https://www.amazon.com/Ethique-Everyday-Shampoo-shiny-Vitamin/dp/B0DHFPB45C?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=c3259282a622e4377baebe58b6acc6b9&language=en_US&ref_=as_li_ss_tl',
      notes: 'Salon‑quality shampoo bar with no sulfates or parabens; packaged in compostable paper; no plastic bottle.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Personal Care</h1>
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
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {item.notes}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={item.url}
                target="_blank"
                rel="sponsored nofollow"
                className="inline-block"
              >
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-sm">
                  Buy on Amazon
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
