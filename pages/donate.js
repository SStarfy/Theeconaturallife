import React from 'react';

/**
 * Donation / Support page for EcoNaturalLife.
 *
 * This page explains why reader support matters and offers ways to contribute.
 */
export default function Donate() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ marginBottom: "24px" }}>Support EcoNaturalLife</h1>
      <p>
        EcoNaturalLife is a passion project run by a single creator. Every
        article, guide and product review is carefully researched, written
        and maintained without corporate sponsorship. If you find the
        resources on this site valuable, please consider supporting the
        ongoing work to keep the site independent and ad‑free.
      </p>
      <h2>How your support helps</h2>
      <ul>
        <li>Covering hosting and domain costs for econaturallife.com</li>
        <li>Funding research into sustainable materials and products</li>
        <li>Testing and reviewing eco‑friendly alternatives firsthand</li>
        <li>Expanding our guides and tutorials on plastic‑free living</li>
      </ul>
      <h2>Ways to contribute</h2>
      <p>
        You can support EcoNaturalLife with a one‑time tip or a small monthly
        contribution. Pick whichever platform you prefer:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "24px 0",
        }}
      >
        <a
          href="https://www.buymeacoffee.com/econaturallife"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#FFDD00",
            color: "#000",
            textAlign: "center",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Buy Me a Coffee
        </a>
        <a
          href="https://ko-fi.com/econaturallife"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#29ABE0",
            color: "#fff",
            textAlign: "center",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Support on Ko‑fi
        </a>
      </div>
      <p>
        Prefer a different method or want to collaborate? Feel free to reach out
        at{' '}
        <a href="mailto:contact@econaturallife.com">contact@econaturallife.com</a>.
        Your generosity directly supports the creation of free, accessible
        eco‑friendly content for everyone.
      </p>
    </main>
  );
}
