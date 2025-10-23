export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-brand-purple tracking-wide">
          Kerentic<span className="text-brand-orange">.</span>
        </h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-brand-blue">About</a></li>
          <li><a href="#skills" className="hover:text-brand-blue">Skills</a></li>
          <li><a href="#contact" className="hover:text-brand-blue">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
