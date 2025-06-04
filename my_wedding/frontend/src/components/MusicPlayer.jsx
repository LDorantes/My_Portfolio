import { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';
import track from '../music/Across_the_Stars.mp3';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div className="fixed bottom-5 right-5 bg-purple-100 text-purple-800 rounded-full shadow-lg p-3 flex items-center gap-3 z-50">
      <audio ref={audioRef} loop autoPlay>
        <source src={track} type="audio/mp3" />
        Tu navegador no soporta audio.
      </audio>

      <button onClick={togglePlay} className="focus:outline-none">
        {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>

      <FaVolumeUp size={16} className="opacity-60" />
    </div>
  );
}
