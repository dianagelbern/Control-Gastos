import { useState } from "react";
import Mensaje from "./Mensaje";

export const NuevoPresupuesto: React.FC<{
  presupuesto: number;
  setPresupuesto: Function;
  setValidPresupuesto: Function;
}> = (props) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e: any) => {
    e.preventDefault();

    if (!props.presupuesto || props.presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return;
    }
    setMensaje("");
    props.setValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={props.presupuesto}
            onChange={(e) => props.setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error" mensaje={mensaje} />}
      </form>
    </div>
  );
};
