export default function Kitchen() {
  const items = [
    {
      name: "Bee's Wrap Assorted Beeswax Wraps",
      description: 'Cotton & beeswax food wraps',
      url: 'https://www.amazon.com/Bees-Wrap-Assorted-Sustainable-Alternative/dp/B0126LMDFK?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=8d6c5c06ac6c780f13d139d73c49850f&language=en_US&ref_=as_li_ss_tl',
      notes: 'Organic cotton infused with beeswax, tree resin & jojoba oil; replaces plastic wrap; compostable.',
    },
    {
      name: 'Swedish Dishcloths (Reusable Cellulose)',
      description: 'Cellulose & cotton dishcloths',
      url: 'https://www.amazon.com/Swedish-Dishcloths-Reusable-Kitchen/dp/B07GX6TRQX?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=7b258017fb7916230c04677c8527a7ff&language=en_US&ref_=as_li_ss_tl',
      notes: 'Made from cellulose & cotton; machine‑washable and compostable; replaces paper towels.',
    },
    {
      name: 'Hiware Stainless Steel Straws',
      description: 'Stainless straws with cleaning brushes',
      url: 'https://www.amazon.com/Hiware-12-Pack-Stainless-Straws-Cleaning/dp/B07D34ZNMH?utm_source=chatgpt.com&th=1&linkCode=ll1&tag=econaturall01-20&linkId=f653baa314d33d2c4054bbfabd41f231&language=en_US&ref_=as_li_ss_tl',
      notes: 'Durable 18/8 stainless steel; BPA‑free; comes with cleaning brushes; eliminates single‑use plastic straws.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Kitchen</h1>
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

