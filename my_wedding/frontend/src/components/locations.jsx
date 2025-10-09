import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgendaSection() {
  const [showLocation, setShowLocation] = useState(false);

  const agenda = [
    { time: "15:00", event: "Ceremonia religiosa" },
    { time: "16:00", event: "Recepción y brindis" },
    { time: "17:30", event: "Cena" },
    { time: "19:00", event: "Primer baile" },
    { time: "20:00", event: "Fiesta" },
  ];

  const churchAddress = "Basílica de Nuestra Señora del Pueblito, Querétaro, México";
  const googleMapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1239382459516!2d-100.44200990000002!3d20.5421093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34f80fcc3bc59%3A0x4eef14421fa6907d!2sBas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20del%20Pueblito!5e0!3m2!1ses-419!2smx!4v1759866246203!5m2!1ses-419!2smx" 
  return (
    <section className="py-16 bg-white text-center" id="agenda">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">
        Agenda del evento
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 py-4 px-6 rounded-lg shadow-sm bg-purple-50"
          >
            {/* Encabezado */}
            <div
              className={`flex items-center justify-between cursor-pointer ${
                item.event === "Ceremonia religiosa" ? "hover:bg-purple-100" : ""
              } p-2 rounded-md transition`}
              onClick={() =>
                item.event === "Ceremonia religiosa" &&
                setShowLocation((prev) => !prev)
              }
            >
              <span className="text-lg font-semibold text-purple-700">
                {item.time}
              </span>
              <span className="text-lg text-gray-800 flex items-center gap-2">
                {item.event}
                {item.event === "Ceremonia religiosa" && (
                  <motion.span
                    animate={{ rotate: showLocation ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600"
                  >
                    ▼
                  </motion.span>
                )}
              </span>
            </div>

            {/* Contenido desplegable */}
            {item.event === "Ceremonia religiosa" && (
              <AnimatePresence>
                {showLocation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-gray-700 text-sm space-y-3">
                      <p className="text-xs text-gray-500 mt-2">podrás acompañarnos en nuestra ceremonia en la:</p>
                      <p className="italic">📍 {churchAddress}</p>
                      

                      {/* Mapa embebido con borde elegante */}
                      <div className="rounded-xl overflow-hidden shadow-lg border border-purple-200">
                        <iframe
                          title="Ubicación de la ceremonia"
                          src={googleMapsEmbed}
                          width="100%"
                          height="300"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ border: 0 }}
                          className="w-full h-[300px]"
                        ></iframe>
                      </div>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          churchAddress
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-purple-700 font-semibold underline hover:text-purple-900 transition"
                      >
                        Abrir en Google Maps
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
