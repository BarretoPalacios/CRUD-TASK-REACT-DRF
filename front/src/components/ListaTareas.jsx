import { useEffect, useState } from "react";
import { getAlltareas } from "../api/tareas.api";
import { Tareascard } from "./Tareascard";

export function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const respuesta = await getAlltareas();
      setTareas(respuesta.data);
    }
    cargarTareas();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tareas.map((tarea) => (
        <Tareascard key={tarea.id} tarea={tarea}/>
      ))}
      
    </div>
  );
}
