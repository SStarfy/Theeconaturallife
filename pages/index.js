// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">EcoNaturalLife</h1>
        <p className="mt-2 text-lg">
          Curated products that help you live sustainably and reduce
          microplastic exposure.
        </p>
      </header>

      <section className="grid gap-4 mt-8">
        <div className="p-4 border rounded-2xl shadow-md bg-white">
          <h3 className="text-lg font-bold">Glass Storage Containers</h3>
          <p className="text-sm">
            Borosilicate glass with airtight bamboo lids. Microwave +
            dishwasher safe.
          </p>
          <a
            href="https://www.amazon.com/dp/XXXXX"
            className="text-green-600 underline block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Amazon
          </a>
        </div>

        {/* add more product blocks here if you want */}
      </section>

      <footer className="mt-8 text-center text-sm text-gray-500">
        As an Amazon Associate, I earn from qualifying purchases.
      </footer>
    </main>
  );
}
