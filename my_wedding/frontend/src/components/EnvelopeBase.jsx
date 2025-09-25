import sealIntact from "../assets/seal-intact1.png";
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeBase() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="relative w-[400px] h-[280px]">
        <svg
          width="400"
          height="280"
          viewBox="0 0 400 280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Textura de papel */}
            <pattern id="paper" patternUnits="userSpaceOnUse" width="400" height="280">
              <image href={envelopeTexture} x="0" y="0" width="400" height="280" />
            </pattern>
          </defs>

          {/* Base rectangular */}
          <rect x="0" y="40" width="400" height="240" fill="url(#paper)" />

          {/* Solapas laterales */}
          <polygon points="0,40 200,160 0,280" fill="url(#paper)" />
          <polygon points="400,40 200,160 400,280" fill="url(#paper)" />

          {/* Solapa inferior */}
          <polygon points="0,280 200,160 400,280" fill="url(#paper)" />

          {/* Solapa superior */}
          <polygon points="0,40 200,160 400,40" fill="url(#paper)" stroke="#c0c0c0" strokeWidth="1" />
        </svg>

        {/* Sello */}
        <div
          className="absolute w-16 h-16"
          style={{
            top: "140px", // justo debajo del vértice
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src={sealIntact} alt="Sello" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
