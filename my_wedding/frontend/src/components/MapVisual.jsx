export default function MapVisual() {
  return (
    <div className="mt-10 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md border-2 border-purple-200">
      <iframe
        title="Ubicación del evento"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.6169012800237!2d-100.45992092491534!3d20.562849903618176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34feb6825710f%3A0x7babf769a2b238d1!2sSALONES%20DE%20EVENTO%20LA%20LUNA%20Y%20CAMPESTRE!5e0!3m2!1ses!2smx!4v1748916552117!5m2!1ses!2smx"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        className="w-full h-[350px]"
      ></iframe>
    </div>
  );
}
