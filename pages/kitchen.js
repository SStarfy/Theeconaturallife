import React from 'react';
import Card from '../components/ui/Card';

const products = [
  {
    category: 'Laundry',
    items: [
      {
        name: 'Woolzies Wool Dryer Balls',
        description: 'Organic wool dryer balls',
        notes: 'Made from 100% New Zealand wool; replaces disposable dryer sheets; no synthetic fragrances or fillers.',
        url: 'https://www.amazon.com/Woolzies-Wool-Dryer-Balls-Organic/dp/B0067STK3C',
      },
    ],
  },
];

export default function EcoProductsPage() {
  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Other Eco‑Friendly Products</h1>
      {products.map((section) => (
        <section key={section.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <Card
                key={item.name}
                title={item.name}
                description={item.description}
                notes={item.notes}
                href={item.url}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
