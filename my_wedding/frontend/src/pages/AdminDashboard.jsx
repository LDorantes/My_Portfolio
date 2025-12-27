import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import TableSeatingPlanner from "../components/TableSeatingPlanner";


export default function AdminDashboard() {
  const [guests, setGuests] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [tempTotal, setTempTotal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token === "admin") {
      setAuthorized(true);
      fetchGuests();
    }
  }, []);

  async function fetchGuests() {
    const querySnapshot = await getDocs(collection(db, "guests"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      assumed: doc.data().assumed ?? false,
      manualTotal: doc.data().manualTotal ?? 0,
    }));
    setGuests(data);
    setLoading(false);
  }

  async function updateGuest(id, field, value) {
    const docRef = doc(db, "guests", id);
    await updateDoc(docRef, { [field]: value });
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, [field]: value } : g))
    );
  }

  // 🔄 Cuando cambiamos la suposición
  function handleAssumedChange(guest, value) {
    const newValue = value === "true";
    updateGuest(guest.id, "assumed", newValue);

    if (newValue) {
      setSelectedGuest(guest);
      setTempTotal(guest.manualTotal || 0);
      setShowModal(true);
    } else {
      // Si cambia a “No”, se limpia manualTotal
      updateGuest(guest.id, "manualTotal", 0);
    }
  }

 async function handleSaveManualTotal() {
  await updateGuest(selectedGuest.id, "manualTotal", Number(tempTotal));
  setGuests((prev) =>
    prev.map((g) =>
      g.id === selectedGuest.id
        ? { ...g, manualTotal: Number(tempTotal), assumed: true }
        : g
    )
  );
  setShowModal(false);
  setSelectedGuest(null);
}


  if (!authorized)
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50 text-gray-700">
        <h2 className="text-2xl font-semibold">Acceso no autorizado 🚫</h2>
      </div>
    );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Cargando datos...
      </div>
    );

  // 📊 Cálculos actualizados
  const confirmedInvitations = guests.filter((g) => g.confirmed).length;
  const totalEstimated = guests
    .filter((g) => g.assumed)
    .reduce((sum, g) => sum + (g.manualTotal || 0), 0);

  const pieData = [
    { name: "Confirmadas", value: confirmedInvitations },
    {
      name: "Pendientes",
      value: guests.length - confirmedInvitations,
    },
  ];

  const COLORS = ["#16a34a", "#e5e7eb"];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Panel de Administración
      </h1>

      {/* 📋 Resumen general */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Invitaciones Totales</h3>
          <p className="text-3xl font-bold text-purple-700">{guests.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Confirmadas</h3>
          <p className="text-3xl font-bold text-green-600">
            {confirmedInvitations}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Total Invitados Estimados</h3>
          <p className="text-3xl font-bold text-blue-600">{totalEstimated}</p>
        </div>
      </div>

      {/* 📊 Gráfico */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">
          Estado general
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

   

      {/* 🧾 Tabla de invitados */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-purple-100 text-purple-800 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border-b">Nombre</th>
              <th className="py-3 px-4 border-b">Confirmado</th>
              <th className="py-3 px-4 border-b">Acompañantes</th>
              <th className="py-3 px-4 border-b">¿Suponemos que irá?</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g, index) => (
              <tr key={index} className="hover:bg-purple-50 transition">
                <td className="py-2 px-4 border-b font-medium">{g.name}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    g.confirmed ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {g.confirmed ? "✅ Sí" : "❌ No"}
                </td>
                <td className="py-2 px-4 border-b">
                  {g.companions?.length || 0}
                </td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={g.assumed ? "true" : "false"}
                    onChange={(e) => handleAssumedChange(g, e.target.value)}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="false">No</option>
                    <option value="true">Sí</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 💬 Modal manual */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] sm:w-[400px] text-center">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              {selectedGuest?.name}
            </h3>
            <p className="text-gray-600 mb-3">
              ¿Cuántas personas asistirán en total por esta invitación?
            </p>
            <input
              type="number"
              min="1"
              value={tempTotal}
              onChange={(e) => setTempTotal(Number(e.target.value))}
              className="border rounded px-3 py-2 w-24 text-center mb-4"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSaveManualTotal}
                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 underline hover:text-gray-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

         <TableSeatingPlanner guests={guests} />
    </section>
  );
}
