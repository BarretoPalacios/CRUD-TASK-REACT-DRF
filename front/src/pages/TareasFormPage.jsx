import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getTarea,
  createTareas,
  deleteTareas,
  updateTareas,
} from "../api/tareas.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TareasFormPage() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    async function loadTarea() {
      if (params.id) {
        const respuesta = await getTarea(params.id);
        setValue("nombre", respuesta.data.nombre);
        setValue("descripcion", respuesta.data.descripcion);
      }
    }
    loadTarea();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTareas(params.id, data);
      toast.success("tarea actualizada :)");
    } else {
      await createTareas(data);
      toast.success("tarea creada :)");
    }
    navigate("/tareas");
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <textarea
          placeholder="descripcion"
          {...register("descripcion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt3">
          crear
        </button>
      </form>

      {params.id && (
        <div className="flex justify-start">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const aceptacion = window.confirm("estas seguro de eliminar ");
              if (aceptacion) {
                await deleteTareas(params.id);
                toast.error("tarea eliminada");
                navigate("/tareas");
              }
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}
