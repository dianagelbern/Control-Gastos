import React, { useEffect, useState } from "react";
import { Gasto } from "../interfaces/Gasto";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
const ControlPresupuesto: React.FC<{
  gastos: Gasto[];
  presupuesto: number;
}> = (props) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = props.gastos?.reduce( (total: number, gasto: Gasto): number => gasto.cantidad + total, 0);
    const totalDisponible = props.presupuesto - totalGastado;
    const nuevoPorcentaje = (((props.presupuesto - totalDisponible) / props.presupuesto) * 100).toFixed(2) ;
    
    
    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(Number(nuevoPorcentaje));
    }, 500)
  },[props.gastos]);

  
  const formatearCantidad = (cantidad: number) => {
    return cantidad?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar  
        value={porcentaje}
        styles={buildStyles({
          pathColor: '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: '#3B82F6'
        })}
        text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(props.presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
