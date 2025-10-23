const projects = [
  {
    title: "Wedding Invitation",
    description: "Interactive digital wedding invitation built with React & Firebase.",
    tech: ["React", "Firebase", "Framer Motion"],
    link: "https://tusitio.com/invitacion"
  },
  {
    title: "Skyward Services MVP",
    description: "Landing and dashboard for a startup project using TypeScript and Tailwind.",
    tech: ["TypeScript", "Vite", "Tailwind"],
    link: "https://skyward.app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 px-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-gray-50 rounded-xl shadow hover:shadow-xl p-6 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map(t => (
                <span key={t} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">{t}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" className="text-indigo-600 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
