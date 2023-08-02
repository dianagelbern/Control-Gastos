import React from "react";
import { NuevoPresupuesto } from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
import { Gasto } from "../interfaces/Gasto";

export const Header: React.FC<{
  gastos: Gasto[];
  presupuesto: number;
  setPresupuesto: Function;
  isValidPresupuesto: boolean;
  setValidPresupuesto: Function;
  setGastos: Function;
}> = (props) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {props.isValidPresupuesto ? (
        <ControlPresupuesto
        gastos={props.gastos}
        presupuesto={props.presupuesto}
        setGastos={props.setGastos}
        setPresupuesto={props.setPresupuesto}
        setValidPresupuesto={props.setValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={props.presupuesto}
          setPresupuesto={props.setPresupuesto}
          setValidPresupuesto={props.setValidPresupuesto}
        />
      )}
    </header>
  );
};
