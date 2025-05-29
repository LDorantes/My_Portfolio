export default function AgendaSection() {
  const agenda = [
    { time: '15:00', event: 'Ceremonia' },
    { time: '16:00', event: 'Recepción y brindis' },
    { time: '17:30', event: 'Cena' },
    { time: '19:00', event: 'Primer baile' },
    { time: '20:00', event: 'Fiesta' },
  ];

  return (
    <section className="py-16 bg-white text-center" id="agenda">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">Agenda del evento</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-lg shadow-sm bg-purple-50"
          >
            <span className="text-lg font-semibold text-purple-700">{item.time}</span>
            <span className="text-lg text-gray-800">{item.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
