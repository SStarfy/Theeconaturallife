import React from 'react';
import Card from '../components/ui/Card';

export default function PersonalCare() {
  const items = [
    {
      name: 'SeaTurtle Bamboo Toothbrush',
      description: 'Castor-bean bristles & bamboo handle',
      notes: 'Plant-based bristles and bamboo handle; plastic-free packaging; no SLS or BPA.',
      url: 'https://www.amazon.com/SeaTurtle-Plant-Based-Bristles-Bamboo-Toothbrush/dp/B08R2S7HX7',
    },
    {
      name: 'Dental Lace Refillable Silk Floss',
      description: 'Silk floss in glass vial (plastic-free)',
      notes: 'Silk floss with candelilla wax; refillable glass dispenser; compostable and plastic-free.',
      url: 'https://www.amazon.com/Dental-Lace-Refillable-Recyclable-Dispenser/dp/B07AW8516Q',
    },
    {
      name: 'Bambaw Metal Safety Razor',
      description: 'Reusable stainless safety razor',
      notes: 'Stainless steel razor replaces disposable plastic cartridges; fully recyclable; zero plastic waste.',
      url: 'https://www.amazon.com/Bambaw-Metal-Safety-Razor-Silver/dp/B07XJQ2KL2',
    },
    {
      name: 'Ethique Everyday Shampoo Bar',
      description: 'Sulfate-free shampoo bar',
      notes: 'Salon-quality shampoo bar with no sulfates or parabens; packaged in compostable paper; no plastic bottle.',
      url: 'https://www.amazon.com/Ethique-Everyday-Shampoo-shiny-Vitamin/dp/B09G8RXV8B',
    },
    {
      name: 'EcoRoots Deodorant',
      description: 'Natural zero-waste deodorant stick',
      notes: 'Aluminum-free and cruelty-free; comes in compostable paper tube packaging.',
      url: 'https://www.amazon.com/EcoRoots-Natural-Deodorant-Plastic-Free/dp/B09Q8TZPMR',
    },
    {
      name: 'HiBAR Solid Conditioner Bar',
      description: 'Plastic-free solid conditioner',
      notes: 'Formulated with coconut oil and shea butter; replaces bottled conditioner; no parabens or phthalates.',
      url: 'https://www.amazon.com/HiBAR-Plastic-Free-Moisturize-Conditioner/dp/B07TZTQ2VL',
    },
    {
      name: 'Etee Silk Dental Floss',
      description: 'Refillable silk floss in glass jar',
      notes: 'Plastic-free, compostable silk floss with natural candelilla wax coating.',
      url: 'https://www.amazon.com/Etee-Plastic-Free-Silk-Dental-Floss/dp/B08V8H7P4Z',
    },
    {
      name: 'Ethique Body Wash Bar',
      description: 'Zero-waste body wash bar',
      notes: 'Hydrating coconut and lime formula; fully compostable packaging.',
      url: 'https://www.amazon.com/Ethique-Plastic-Free-Bodywash-Coconut-Lime/dp/B07WG1SW8T',
    },
    {
      name: 'Leaf Razor Starter Kit',
      description: 'Luxury metal razor starter kit',
      notes: 'Refillable, durable, and zero waste; made from stainless steel.',
      url: 'https://www.amazon.com/Leaf-Razor-Stainless-Steel-Reusable/dp/B07Y9BVFYC',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Personal Care</h1>
      {/*
        Use a responsive grid that automatically fits as many cards as possible
        within the available space. Each card will have a minimum width of
        200px and expand to fill the remaining space. This creates smaller,
        cube-like card layouts that look consistent across screen sizes.
      */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {items.map((item) => (
          <div key={item.name} className="flex">
            <Card
              title={item.name}
              description={item.description}
              notes={item.notes}
              href={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
