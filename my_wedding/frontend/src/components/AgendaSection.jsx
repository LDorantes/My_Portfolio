import salon from "../assets/salon.jpg";
import santuario from "../assets/Santuario.webp";

export default function AgendaSection() {
  const agenda = [
    {
      time: "13:00",
      event: "Ceremonia religiosa",
      address: "Basílica de Nuestra Señora del Pueblito, Querétaro, México",
      image: santuario,
      link: "https://www.google.com/maps/search/?api=1&query=Basílica%20de%20Nuestra%20Señora%20del%20Pueblito%2C%20Querétaro%2C%20México",
    },
    {
      time: "15:30",
      event: "Recepción en el salón",
      address: "Salones de evento La Luna y Campestre, Querétaro, México",
      image: salon,
      link: "https://www.google.com/maps/search/?api=1&query=Salones%20de%20evento%20La%20Luna%20y%20Campestre%2C%20Querétaro%2C%20México",
    },
  ];

  return (
    <section className="py-20 bg-[#fef9f6] text-center" id="agenda">
      <h2 className="text-3xl font-bold text-purple-800 mb-12">Agenda</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-purple-200 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Imagen */}
            <div className="w-full h-64 sm:h-80 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.event}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Texto */}
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-purple-800">
                {item.event}
              </h3>
              <p className="text-sm text-gray-600">{item.time}</p>
              <p className="italic text-gray-700 text-sm leading-relaxed">
                📍 {item.address}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-purple-700 font-semibold underline hover:text-purple-900 transition"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
