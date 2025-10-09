import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import salon from "../assets/salon.jpg";
import santuario from "../assets/Santuario.webp";


export default function AgendaSection() {
  const [showChurch, setShowChurch] = useState(false);
  const [showSalon, setShowSalon] = useState(false);

  const agenda = [
    { time: "13:00", event: "Ceremonia religiosa" },
    { time: "15:30", event: "Recepción en el salón" },
  ];

  const churchAddress =
    "Basílica de Nuestra Señora del Pueblito, Querétaro, México";
  const salonAddress =
    "Salones de evento La Luna y Campestre, Querétaro, México";

  const googleMapsEmbedC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1239382459516!2d-100.44200990000002!3d20.5421093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34f80fcc3bc59%3A0x4eef14421fa6907d!2sBas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20del%20Pueblito!5e0!3m2!1ses-419!2smx!4v1759866246203!5m2!1ses-419!2smx";

  const googleMapsEmbedS =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.6331166861787!2d-100.45804337860484!3d20.562186914044407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34feb6825710f%3A0x7babf769a2b238d1!2sSALONES%20DE%20EVENTO%20LA%20LUNA%20Y%20CAMPESTRE!5e0!3m2!1ses!2smx!4v1759904161633!5m2!1ses!2smx";

  return (
    <section className="py-16 bg-white text-center" id="agenda">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">Localidades</h2>

      <div className="max-w-2xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
        {agenda.map((item, index) => {
          const isChurch = item.event === "Ceremonia religiosa";
          const isSalon = item.event === "Recepción en el salón";
          const isOpen = (isChurch && showChurch) || (isSalon && showSalon);

          return (
            <div
              key={index}
              className="flex flex-col border-b border-gray-200 py-4 px-4 sm:px-6 rounded-lg shadow-sm bg-purple-50"
            >
              {/* Encabezado */}
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-purple-100 p-3 rounded-md transition"
                onClick={() => {
                  if (isChurch) setShowChurch((prev) => !prev);
                  if (isSalon) setShowSalon((prev) => !prev);
                }}
              >
                <span className="text-base sm:text-lg font-semibold text-purple-700">
                  {item.time}
                </span>
                <span className="text-base sm:text-lg text-gray-800 flex items-center gap-2">
                  {item.event}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600"
                  >
                    ▼
                  </motion.span>
                </span>
              </div>

              {/* Contenido desplegable */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-gray-700 text-sm sm:text-base space-y-3">
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        {isChurch
                          ? "Podrás acompañarnos en nuestra ceremonia en la:"
                          : "Después de la ceremonia, celebra con nosotros en:"}
                      </p>
                      <p className="italic break-words">
                        📍 {isChurch ? churchAddress : salonAddress}
                      </p>

                      {/* Mapa + miniatura */}
                      <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-purple-200 aspect-video">
                        <iframe
                          title={
                            isChurch
                              ? "Ubicación de la ceremonia"
                              : "Ubicación de la recepción"
                          }
                          src={isChurch ? googleMapsEmbedC : googleMapsEmbedS}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                        <div className="absolute bottom-3 right-3 w-28 sm:w-36 rounded-lg overflow-hidden border-2 border-white shadow-md transition-transform duration-300 hover:scale-105">
                          <img
                            src={santuario}
                            alt="Vista del salón"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Miniatura flotante: solo para el salón */}
                        {isSalon && (
                          <div className="absolute bottom-3 right-3 w-28 sm:w-36 rounded-lg overflow-hidden border-2 border-white shadow-md transition-transform duration-300 hover:scale-105">
                            <img
                              src={salon}
                              alt="Vista del salón"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          isChurch ? churchAddress : salonAddress
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
