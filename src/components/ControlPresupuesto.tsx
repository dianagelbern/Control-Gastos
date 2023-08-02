import React, { useEffect, useState } from "react";
import { Gasto } from "../interfaces/Gasto";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
const ControlPresupuesto: React.FC<{
  gastos: Gasto[];
  presupuesto: number;
  setGastos: Function;
  setPresupuesto: Function;
  setValidPresupuesto: Function;
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

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
    if(resultado){
      props.setGastos([]);
      props.setPresupuesto(0);
      props.setValidPresupuesto(false);
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar  
        value={porcentaje}
        styles={buildStyles({
          pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: porcentaje > 100 ? '#DC2626': '#3B82F6'
        })}
        text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button
        className="reset-app"
        type="button"
        onClick={handleResetApp}
        >
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(props.presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
