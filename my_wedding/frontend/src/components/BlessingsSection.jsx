export default function BlessingsSection() {
  return (
    <section className="py-20 px-6 bg-white text-center relative overflow-hidden">
      {/* Decoración floral */}
      <img
        src="/img/flor-top-left.png"
        alt="Decoración"
        className="absolute top-0 left-0 w-24 opacity-40"
      />
      <img
        src="/img/flor-top-right.png"
        alt="Decoración"
        className="absolute top-0 right-0 w-24 opacity-40"
      />

      <h2 className="text-3xl font-bold text-purple-800 mb-6">Con la bendición de</h2>
      <p className="text-gray-600 max-w-xl mx-auto text-lg mb-8">
        Con la bendición de Dios y de nuestros padres, queremos que seas testigo de este amor.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700 font-medium">
        <div>
          <h3 className="text-xl text-purple-700 mb-2 uppercase tracking-wider">Padres de la Novia</h3>
          <p>Ana María Rodriguez Mandujano</p>
          <p>Armando Martinez Aguilar (Q.D.E.P)</p>
        </div>
        <div>
          <h3 className="text-xl text-purple-700 mb-2 uppercase tracking-wider">Padres del Novio</h3>
          <p>Arcelia Ordoñez Ruíz</p>
          <p>Ricardo Dorantes García</p>
        </div>
        <div>
          <h3 className="text-xl text-purple-700 mb-2 uppercase tracking-wider">Padrinos</h3>
          <p>Esther Ortíz</p>
          <p>Miguel Ordoñez Ruiz</p>
        </div>
      </div>
    </section>
  );
}
