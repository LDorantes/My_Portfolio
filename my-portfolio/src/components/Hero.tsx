export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-brand-purple via-brand-blue to-brand-orange text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Leonardo Dorantes
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-brand-light">
          CEO & Full Stack Engineer at <span className="font-semibold text-brand-orange">Kerentic</span>
        </h2>
        <a
          href="#contact"
          className="px-10 py-3 bg-white text-brand-dark font-semibold rounded-full shadow-md hover:bg-brand-orange hover:text-white transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
