export default function Navbar() {
  return (
    <div className="w-full shadow-md bg-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700">EcoNaturalLife</div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search eco-friendly products..."
          className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Categories with subtle dividers */}
      <div className="hidden md:flex font-medium text-gray-700 divide-x divide-gray-200">
        <a href="/kitchen" className="px-3 hover:text-green-600">Home & Kitchen</a>
        <a href="/cleaning" className="px-3 hover:text-green-600">Cleaning Supplies</a>
        <a href="/personal-care" className="px-3 hover:text-green-600">Personal Care</a>
        <a href="/travel" className="px-3 hover:text-green-600">Travel</a>
        <a href="/family-kids" className="px-3 hover:text-green-600">Family & Kids</a>
        <a href="/office" className="px-3 hover:text-green-600">Office</a>
      </div>
    </div>
  )
}

