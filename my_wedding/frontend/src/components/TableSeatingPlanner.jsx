import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion, AnimatePresence } from "framer-motion";

export default function TableSeatingPlanner({ guests }) {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    loadTables();
  }, []);

  async function loadTables() {
  const snapshot = await getDocs(collection(db, "tables"));
  if (snapshot.empty) {
    // Si no existen mesas, las creamos
    const newTables = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      guests: [],
    }));
    for (const t of newTables) {
      await setDoc(doc(db, "tables", `table-${t.id}`), t);
    }
    setTables(newTables);
  } else {
    // 🔒 Arreglamos mesas incompletas
    const loaded = snapshot.docs.map((d) => {
      const data = d.data();
      return {
        id: data.id ?? parseInt(d.id.replace("table-", "")),
        guests: Array.isArray(data.guests) ? data.guests : [],
      };
    });
    setTables(loaded);
  }
  setLoading(false);
}


  async function assignGuestToTable(guestName, tableId) {
    const tableRef = doc(db, "tables", `table-${tableId}`);
    await updateDoc(tableRef, {
      guests: arrayUnion(guestName),
    });
    setTables((prev) =>
      prev.map((t) =>
        t.id === tableId ? { ...t, guests: [...t.guests, guestName] } : t
      )
    );
  }

  async function removeGuestFromTable(guestName, tableId) {
    const tableRef = doc(db, "tables", `table-${tableId}`);
    await updateDoc(tableRef, {
      guests: arrayRemove(guestName),
    });
    setTables((prev) =>
      prev.map((t) =>
        t.id === tableId
          ? { ...t, guests: t.guests.filter((g) => g !== guestName) }
          : t
      )
    );
  }

  // 🔄 Drag & Drop handler
  const onDragEnd = async (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const tableId = parseInt(destination.droppableId.replace("table-", ""));
    await assignGuestToTable(draggableId, tableId);
  };

  if (loading)
    return <p className="text-center py-10 text-gray-500">Cargando mesas...</p>;

  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-10">
      <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
        Plano interactivo de mesas
      </h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 📋 Lista de invitados */}
          <Droppable droppableId="guestList">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="bg-purple-50 rounded-xl p-4 shadow-inner w-full lg:w-1/3 overflow-y-auto max-h-[700px]"
              >
                <h3 className="text-lg font-semibold text-purple-700 mb-3">
                  Invitados sin asignar
                </h3>
                {guests
                  .filter(
                    (g) =>
                      !tables.some((t) => t.guests.includes(g.name)) &&
                      g.confirmed
                  )
                  .map((guest, index) => (
                    <Draggable
                      key={guest.name}
                      draggableId={guest.name}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white rounded-md p-2 mb-2 shadow-sm border border-purple-200 hover:shadow transition"
                        >
                          {guest.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* 🪩 Plano de mesas */}
          <div
            className="relative border border-purple-200 rounded-lg bg-purple-50 flex-1"
            style={{
              width: "1000px",
              height: "750px",
              maxWidth: "100%",
              aspectRatio: "4/3",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {tables.map((table, i) => {
              const row = Math.floor(i / 5);
              const col = i % 5;
              const spacingX = 180;
              const spacingY = 150;
              const offsetX = 70;
              const offsetY = 70;
              const color =
                table.guests.length === 10
                  ? "#16a34a"
                  : table.guests.length >= 5
                  ? "#facc15"
                  : "#a78bfa";

              return (
                <Droppable key={table.id} droppableId={`table-${table.id}`}>
                  {(provided) => (
                    <motion.div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="absolute flex flex-col items-center justify-center text-center cursor-pointer"
                      style={{
                        top: offsetY + row * spacingY,
                        left: offsetX + col * spacingX,
                      }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedTable(table)}
                    >
                      <div
                        className="rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md"
                        style={{
                          width: "70px",
                          height: "70px",
                          backgroundColor: color,
                          border: "2px solid white",
                        }}
                      >
                        M{table.id}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {table.guests.length}/10
                      </p>
                      {provided.placeholder}
                    </motion.div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </div>
      </DragDropContext>

      {/* 🪑 Modal de mesa */}
      <AnimatePresence>
        {selectedTable && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl w-[90%] sm:w-[500px] text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Mesa {selectedTable.id}
              </h3>
              {selectedTable.guests.length === 0 ? (
                <p className="text-gray-400 text-sm italic mb-4">
                  No hay invitados asignados.
                </p>
              ) : (
                <ul className="mb-4 text-left max-h-40 overflow-y-auto">
                  {selectedTable.guests.map((g, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center bg-purple-50 p-2 rounded mb-2"
                    >
                      <span>{g}</span>
                      <button
                        onClick={() =>
                          removeGuestFromTable(g, selectedTable.id)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => setSelectedTable(null)}
                className="text-gray-600 text-sm underline hover:text-purple-700"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
