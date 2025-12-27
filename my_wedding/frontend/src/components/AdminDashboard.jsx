import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [guests, setGuests] = useState([]);
  const [authorized, setAuthorized] = useState(false);

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
    const data = querySnapshot.docs.map((doc) => doc.data());
    setGuests(data);
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50 text-gray-700">
        <h2 className="text-2xl font-semibold">Acceso no autorizado 🚫</h2>
      </div>
    );
  }

  // 📊 Cálculos
  const confirmedGuests = guests.filter((g) => g.confirmed).length;
  const totalGuests = guests.length;
  const totalCompanions = guests.reduce((acc, g) => acc + (g.companions?.length || 0), 0);
  const unconfirmedGuests = totalGuests - confirmedGuests;

  const pieData = [
    { name: "Confirmados", value: confirmedGuests },
    { name: "Pendientes", value: unconfirmedGuests },
  ];

  const COLORS = ["#8b5cf6", "#e5e7eb"];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Panel de Administración</h1>

      {/* Resumen en cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Invitaciones Totales</h3>
          <p className="text-3xl font-bold text-purple-700">{totalGuests}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Confirmados</h3>
          <p className="text-3xl font-bold text-green-600">{confirmedGuests}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-600">Acompañantes Totales</h3>
          <p className="text-3xl font-bold text-blue-600">{totalCompanions}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Estado de confirmaciones</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={90} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Acompañantes por invitado</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={guests}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey={(g) => g.companions?.length || 0} fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabla de invitados */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-purple-100 text-purple-800 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border-b">Nombre</th>
              <th className="py-3 px-4 border-b">Confirmado</th>
              <th className="py-3 px-4 border-b">Acompañantes</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g, index) => (
              <tr key={index} className="hover:bg-purple-50 transition">
                <td className="py-2 px-4 border-b font-medium">{g.name}</td>
                <td className={`py-2 px-4 border-b ${g.confirmed ? "text-green-600" : "text-gray-500"}`}>
                  {g.confirmed ? "✅ Sí" : "❌ No"}
                </td>
                <td className="py-2 px-4 border-b">{g.companions?.length || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
