"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const images = [
  "/gallery/graduacion-2025/reconocimiento.webp",
  "/gallery/graduacion-2025/yo-graduacion.webp",
  "/gallery/graduacion-2025/skywards-graduate.webp",
  "/gallery/graduacion-2025/mi-bro-y-yo-graduado.webp",
  "/gallery/graduacion-2025/skywardsafter.webp",
  "/gallery/graduacion-2025/partners.webp",
];

export default function Graduacion2025() {
  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">

      {/* Fondo futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-6">
        Graduación 2025
      </h1>

      <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg mb-12">
        Un día lleno de orgullo, emoción y nuevos comienzos.
        Aquí conservo los momentos más significativos de esta etapa.
      </p>

      <Gallery>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <Item key={i} original={src} thumbnail={src} width="1500" height="1000">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="w-full rounded-xl shadow-md hover:shadow-xl cursor-pointer hover:opacity-90 transition"
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </section>
  );
}
