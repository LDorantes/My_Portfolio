export default function Navbar() {
  const links = [
    { href: '#hero', label: 'Inicio' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#gallery', label: 'Galería' },
    { href: '#rsvp', label: 'Confirmar' },
    { href: '#gifts', label: 'Regalos' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-purple-700 text-lg">Leo & Zoe</h1>
        <ul className="flex gap-4 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-purple-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
