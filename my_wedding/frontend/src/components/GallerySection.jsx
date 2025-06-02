const img = [
  '/img/image0.jpeg',
  '/img/image1.jpeg',
  '/img/image2.jpeg',
  '/img/image3.jpeg',
  '/img/image4.jpeg',
  '/img/image5.jpeg',
];

export default function GallerySection() {
  return (
    <section className="py-16 px-6 bg-white text-center" id="gallery">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">Galería</h2>

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
