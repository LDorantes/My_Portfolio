"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const images = [
  "/gallery/foto1.jpg",
  "/gallery/foto2.jpg",
  "/gallery/foto3.jpg",
  "/gallery/foto4.jpg",
  "/gallery/foto5.jpg",
  "/gallery/foto6.jpg",
];

export default function GalleryPage() {
  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">

      {/* Fondo futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-16">
        Galería Fotográfica
      </h1>

      <Gallery>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <Item
              key={i}
              original={src}
              thumbnail={src}
              width="1500"
              height="1000"
            >
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
