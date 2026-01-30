import React from 'react';
import styles from "../styles/ProductGrid.module.css";

const products = [
  { name: "SeaTurtle Bamboo Toothbrush", price: 9.99, was: 12.99, off: 23, rating: 4.6, reviews: 38, url: "https://www.amazon.com/SeaTurtle-Plant-Based-Bristles-Bamboo-Toothbrush/dp/B08R2S7HX7" },
  { name: "Dental Lace Refillable Silk Floss", price: 7.99, was: 9.99, off: 20, rating: 4.4, reviews: 12, url: "https://www.amazon.com/Dental-Lace-Refillable-Recyclable-Dispenser/dp/B07AW8516Q" },
  { name: "Bambaw Metal Safety Razor", price: 21.99, was: 26.99, off: 19, rating: 4.5, reviews: 112, url: "https://www.amazon.com/Bambaw-Metal-Safety-Razor-Silver/dp/B07XJQ2KL2" },
  { name: "Ethique Everyday Shampoo Bar", price: 15.99, was: 19.99, off: 20, rating: 4.6, reviews: 203, url: "https://www.amazon.com/Ethique-Everyday-Shampoo-shiny-Vitamin/dp/B09G8RXV8B" },
  { name: "EcoRoots Deodorant", price: 12.99, was: 15.99, off: 18, rating: 4.3, reviews: 89, url: "https://www.amazon.com/EcoRoots-Natural-Deodorant-Plastic-Free/dp/B09Q8TZPMR" },
  { name: "HiBAR Solid Conditioner Bar", price: 13.99, was: 16.99, off: 16, rating: 4.4, reviews: 77, url: "https://www.amazon.com/HiBAR-Plastic-Free-Moisturize-Conditioner/dp/B07TZTQ2VL" },
  { name: "Etee Silk Dental Floss", price: 9.99, was: 12.99, off: 23, rating: 4.2, reviews: 31, url: "https://www.amazon.com/Etee-Plastic-Free-Silk-Dental-Floss/dp/B08V8H7P4Z" },
  { name: "Ethique Body Wash Bar", price: 11.99, was: 13.99, off: 15, rating: 4.5, reviews: 58, url: "https://www.amazon.com/Ethique-Plastic-Free-Bodywash-Coconut-Lime/dp/B07WG1SW8T" },
  { name: "Leaf Razor Starter Kit", price: 59.99, was: 69.99, off: 14, rating: 4.7, reviews: 420, url: "https://www.amazon.com/Leaf-Razor-Stainless-Steel-Reusable/dp/B07Y9BVFYC" },
];

function Stars({ rating = 0 }) {
  const full = Math.round(rating);
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={styles.star} viewBox="0 0 24 24" aria-hidden="true" style={{ opacity: i < full ? 1 : 0.25 }}>
          <path d="M12 17.3 18.2 21l-1.6-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.7L5.8 21z" />
        </svg>
      ))}
    </span>
  );
}

export default function PersonalCare() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Personal Care</h1>
      </header>
      <section className={styles.grid}>
        {products.map((p) => (
          <article key={p.name} className={styles.card}>
            {!!p.off && <div className={styles.badge}>{p.off}% OFF</div>}
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>{p.name}</div>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{p.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>${p.price.toFixed(2)}</span>
                {p.was ? <span className={styles.was}>${p.was.toFixed(2)}</span> : null}
              </div>
              <div className={styles.meta}>
                <Stars rating={p.rating} />
                <span>{p.reviews} reviews</span>
              </div>
              <div className={styles.ctaRow}>
                <a className={styles.cta} href={p.url} target="_blank" rel="sponsored nofollow">
                  BUY
                </a>
                <button className={styles.ghost} type="button" aria-label="Save">
                  ♡
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
