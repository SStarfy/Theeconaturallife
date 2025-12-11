import React from 'react';

// This page lists the remaining eco-friendly products that don't fall neatly
// into specific categories like Personal Care or Kitchen. Currently it
// includes only our laundry items. Additional uncategorized products can
// be added to the array below.
const products = [
  {
    category: 'Laundry',
    items: [
      {
        name: 'Woolzies Wool Dryer Balls',
        description: 'Organic wool dryer balls',
        url: 'https://www.amazon.com/Woolzies-Wool-Dryer-Balls-Organic/dp/B0067STK3C?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=01615c58b3be01d3eeaafa2360f67040&language=en_US&ref_=as_li_ss_tl',
        notes: 'Made from 100% New Zealand wool; replaces disposable dryer sheets; no synthetic fragrances or fillers.',
      },
    ],
  },
];

export default function EcoProductsPage() {
  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Other Eco‑Friendly Products</h1>
      {products.map((section) => (
        <div key={section.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="rounded-xl p-4 flex flex-col justify-between bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
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
      ))}
    </div>
  );
}
