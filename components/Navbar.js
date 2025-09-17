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
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid #e5e7eb;
        }
        .inner {
          max-width: 1100px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-decoration: none;
        }
        .title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.01em;
        }
        .accent {
          color: #2e7d32;
        }
        .tagline {
          margin-top: 2px;
          font-size: 0.8rem;
          color: #6b7280;
        }
        .links {
          display: flex;
          gap: 22px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #374151;
        }
        .links a {
          text-decoration: none;
          color: inherit;
          padding: 6px 4px;
          transition: color 0.2s ease;
        }
        .links a:hover {
          color: #166534;
        }
      `}</style>
    </header>
  )
}

