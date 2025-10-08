const img = [
  '/img/6.webp',
  '/img/7.webp',
  '/img/10.webp',
  '/img/15.webp',
  '/img/22.webp',
  '/img/16.webp',
  '/img/26.webp',
  '/img/27.webp',
  '/img/30.webp',
];

export default function GallerySection() {
  return (
    <section className="py-16 px-6 bg-white text-center" id="gallery">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">Galería</h2>
      <p className="text-gray-600 max-w-xl mx-auto text-lg mb-8">
         Momentos inolvidables que queremos compartir
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {img.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
