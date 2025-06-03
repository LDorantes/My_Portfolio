import { motion } from 'framer-motion';
import { Heart } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

export default function CalendarVisual() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const totalDays = 31;
  const startDayIndex = 0;

  const cells = [];

  for (let i = 0; i < startDayIndex; i++) {
    cells.push(<div key={`empty-${i}`}></div>);
  }

  for (let i = 1; i <= totalDays; i++) {
    const isSpecial = i === 27;
    const content = isSpecial ? (
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="relative flex flex-col items-center justify-center"
      >
        <span>{i}</span>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 right-0"
        >
          <Heart className="w-4 h-4 text-pink-600" fill="#d946ef" />
        </motion.div>
      </motion.div>
    ) : (
      i
    );

    cells.push(
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.015 }}
        className={`border rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium ${
          isSpecial
            ? 'bg-purple-600 text-white shadow-md'
            : 'bg-white text-gray-800'
        }`}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 bg-white rounded-xl p-6 shadow max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-4 text-purple-700">Diciembre 2025</h3>
      <div className="grid grid-cols-7 gap-2 text-sm text-gray-500 mb-2">
        {days.map((d, idx) => (
          <div key={idx} className="text-center font-semibold">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{cells}</div>
      <p className="mt-4 text-purple-600 text-sm text-center">
        💍 ¡Nos vemos el 27 de diciembre!
      </p>
    </motion.div>
  );
}