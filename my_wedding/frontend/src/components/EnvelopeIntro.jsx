import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sealIntact from '../assets/seal-intact1.png';
import sealBroken from '../assets/seal-broken1.png';
import envelopeTexture from '../assets/paper-texture.png';

export default function EnvelopeIntro({ onReveal }) {
  const [broken, setBroken] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setBroken(true);
    setTimeout(() => {
      setOpened(true);
      onReveal();
      document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[380px] h-[260px] bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${envelopeTexture})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Triángulo superior (parte que se pliega al abrir) */}
        <motion.div
          initial={false}
          animate={{ rotateX: opened ? -100 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-t-lg shadow-inner origin-top"
          style={{
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            transformStyle: 'preserve-3d',
            backgroundImage: `url(${envelopeTexture})`,
            backgroundSize: 'cover',
          }}
        />

        {/* Lado inferior del sobre */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-white"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            backgroundImage: `url(${envelopeTexture})`,
            backgroundSize: 'cover',
          }}
        />

        {/* Texto de los nombres */}
        <div className="absolute top-1/3 w-full text-center">
          <h1 className="text-2xl font-bold text-purple-800">Andy & Leo</h1>
          <p className="text-sm text-purple-600">27 de diciembre, 2025</p>
        </div>

        {/* Sello */}
        <motion.button
          onClick={handleOpen}
          whileTap={{ scale: 0.95 }}
          disabled={broken}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-24 h-24 rounded-full flex items-center justify-center bg-transparent"
        >
          <motion.img
            key={broken ? 'broken' : 'intact'}
            src={broken ? sealBroken : sealIntact}
            alt="Sello"
            initial={{ rotate: 0 }}
            animate={{ rotate: broken ? 15 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full object-contain"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
