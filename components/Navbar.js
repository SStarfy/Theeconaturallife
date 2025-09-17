
export default function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Top-left brand lockup */}
        <a
          href="/"
          className="group inline-flex items-center gap-2 rounded-xl px-2 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/60"
          aria-label="Go to homepage"
        >
          {/* Leaf mark */}
          <span className="grid h-8 w-8 place-items-center rounded-xl ring-1 ring-inset ring-green-600/20 bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            {/* Simple leaf icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M19.5 3.5c-6 1-10 5.5-11 9.8-.7 3 1.2 6.2 4.4 7 .8.2 1.7.2 2.5.1 1.1-.2 2.1-.8 2.9-1.6 3.6-3.8 3.9-10.5 1.2-15.3ZM7.7 13.6c.9-1.6 2.4-3.3 4.8-4.8 1.4-.9 3-.1 1.7 1-1.9 1.5-3.1 2.9-3.9 4.4-.9 1.7-3.5 1.2-2.6-.6Z" />
            </svg>
          </span>

          {/* Wordmark */}
          <span className="flex flex-col leading-tight">
            <span className="text-[1.25rem] font-extrabold tracking-tight text-gray-900">
              Eco<span className="text-green-700">Natural</span>Life
            </span>
            <span className="hidden sm:block text-[0.72rem] text-gray-500 -mt-0.5">
              Plastic‑free picks that last
            </span>
          </span>

          {/* Underline flourish on hover */}
          <span className="relative ml-1 hidden sm:block h-px w-0 bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-200 group-hover:w-10" />
        </a>

        {/* (Rest of navbar content stays as-is or can be improved later) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="/cleaning" className="hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 rounded-md px-1.5 py-1">Cleaning</a>
          <a href="/personal-care" className="hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 rounded-md px-1.5 py-1">Personal Care</a>
          <a href="/kitchen" className="hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 rounded-md px-1.5 py-1">Kitchen</a>
          <a href="/travel" className="hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 rounded-md px-1.5 py-1">Travel</a>
          <a href="/office" className="hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 rounded-md px-1.5 py-1">Office</a>
        </nav>

        {/* Mobile menu placeholder (optional) */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
