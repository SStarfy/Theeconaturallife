export default function Navbar() {
  return (
    <header className="navbar">
      <div className="inner">
        {/* Brand */}
        <a href="/" className="brand">
          <span className="title">
            Eco<span className="accent">Natural</span>Life
          </span>
          <span className="tagline">Plastic-free picks that last</span>
        </a>

        {/* Search */}
        <form className="search" action="/search" method="get" role="search">
          <input
            type="search"
            name="q"
            placeholder="Search products…"
            aria-label="Search products"
          />
        </form>

        {/* Navigation */}
        <nav className="links">
          <a href="/cleaning">Cleaning</a>
          <a href="/personal-care">Personal Care</a>
          <a href="/kitchen">Kitchen</a>
          <a href="/travel">Travel</a>
          <a href="/office">Office</a>
          
        </nav>
      </div>

      <style jsx>{`
        /* ========== BAR ========== */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #e5e7eb;
          overflow-x: hidden;
        }
        .inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          height: 60px;
          padding: 0 12px;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }

        /* ========== BRAND ========== */
        .brand {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
          text-decoration: none;
        }
        .title {
          font-size: 1.28rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.01em;
        }
        .accent { color: #2e7d32; }
        .tagline {
          font-size: 0.76rem;
          color: #6b7280;
        }

        /* ========== SEARCH ========== */
        .search {
          display: flex;
          align-items: center;
          width: 100%;
          min-width: 0;
        }
        .search input {
          width: 100%;
          min-width: 0;
          height: 36px;
          padding: 0 12px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #ffffff;
          color: #111827;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }
        .search input::placeholder { color: #9ca3af; }
        .search input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);
        }

        /* ========== LINKS (with underline) ========== */
        .links {
          display: flex;
          gap: 16px;
          font-size: 0.95rem;
          font-weight: 500;
            flex-wrap: wrap;
            
          color: #374151;
       
        }
        .links a {
          text-decoration: none;
          color: inherit;
          padding: 6px 6px;
          border-radius: 8px;
          position: relative;
          transition: color 0.18s ease;
        }
        .links a:hover { color: #166534; }
        .links a::after {
          content: "";
          position: absolute;
          left: 6px;
          right: 6px;
          bottom: 4px;
          height: 2px;
          background: #16a34a;
          border-radius: 999px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
          opacity: 0.9;
        }
        .links a:hover::after { transform: scaleX(1); }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 900px) {
          .inner {
            grid-template-columns: 1fr 1fr;
            height: 58px;
            padding: 0 10px;
            gap: 10px;
          }
          .search { grid-column: 1 / -1; order: 3; }
          .links { display: none; }
          .tagline { display: none; }
          .title { font-size: 1.2rem; }
        }
      `}</style>
    </header>
  );
}
