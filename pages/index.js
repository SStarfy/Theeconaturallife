import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fbe9] flex items-center justify-center p-6">
      <Card className="max-w-md w-full rounded-2xl shadow-lg bg-white">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-green-700">EcoNaturalLife</h1>
          <p className="text-gray-700">
            Curated products that help you live sustainably and reduce microplastic exposure.
          </p>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-green-600">Glass Storage Containers</h2>
            <p className="text-gray-600 mt-2">
              Borosilicate glass with airtight bamboo lids. Microwave + dishwasher safe.
            </p>

            <a 
              href="https://www.amazon.com/dp/YOUR-AFFILIATE-LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl shadow">
                View on Amazon
              </Button>
            </a>

            <p className="text-xs text-gray-500 mt-3">
              As an Amazon Associate, I earn from qualifying purchases.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
