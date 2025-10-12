import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/principal.webp",
  "/img/6.webp",
  "/img/7.webp",
  "/img/10.webp",
  "/img/15.webp",
  "/img/22.webp",
  "/img/16.webp",
  "/img/26.webp",
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);

  // Cambia a la siguiente imagen, vuelve al inicio si llega al final
  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-[#fef9f6] text-center" id="gallery">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">Galería</h2>
      <p className="text-gray-600 max-w-xl mx-auto text-lg mb-10">
        Momentos inolvidables que queremos compartir
      </p>

      <div
        className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={nextImage}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Foto ${index + 1}`}
            className="w-full h-[400px] sm:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Indicador sutil */}
        <div className="absolute bottom-4 right-4 bg-black/40 text-white text-sm px-3 py-1 rounded-full">
          {index + 1} / {images.length}
        </div>

        {/* Overlay de texto opcional */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition">
          <span className="text-white text-sm sm:text-base font-medium opacity-0 hover:opacity-100 transition">
            Haz clic para ver la siguiente
          </span>
        </div>
      </div>
    </section>
  );
}
