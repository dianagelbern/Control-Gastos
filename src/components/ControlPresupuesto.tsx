import React from "react";

const ControlPresupuesto: React.FC<{
    presupuesto: number; }> = (props) => {

        const formatearCantidad =  (cantidad: number) => {
            return cantidad.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })
        }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto: </span> {formatearCantidad(props.presupuesto)}
        </p>
        <p>
            <span>Disponible: </span> {formatearCantidad(0)}
        </p>
        <p>
            <span>Gastado: </span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
