const skills = [
  "React", "TypeScript", "JavaScript", "PHP", "Python",
  "MySQL", "Firebase", "Docker", "Git", "TailwindCSS"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
        {skills.map(skill => (
          <div
            key={skill}
            className="bg-white rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-4 flex items-center justify-center font-medium text-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
