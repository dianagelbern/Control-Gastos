import { useEffect, useState } from "react";
import cerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

export const Modal: React.FC<{
  setModal: Function;
  animarModal: boolean;
  setAnimarModal: Function;
  guardarGasto: Function;
  gastoEditar: any;
  setGastoEditar: Function;
}> = (props) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("")
  
  useEffect(() => {
    if(Object.keys(props.gastoEditar).length > 0){
      setNombre(props.gastoEditar.nombre);
      setCantidad(props.gastoEditar.cantidad);
      setCategoria(props.gastoEditar.categoria);
      setId(props.gastoEditar.id)
    }
  }, []);

  const ocultarModal = () => {
    props.setModal(false);
    props.setAnimarModal(false);
    props.setGastoEditar({});
    setTimeout(() => {
      props.setModal(false);
    }, 500);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    }
    props.guardarGasto({ nombre, cantidad, categoria, id });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${props.animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{props.gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo={"error"} mensaje={mensaje} />}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value={props.gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"} />
      </form>
    </div>
  );
};
