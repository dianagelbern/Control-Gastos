import React from "react";
import { NuevoPresupuesto } from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

export const Header: React.FC<{
  presupuesto: number;
  setPresupuesto: Function;
  isValidPresupuesto: boolean;
  setValidPresupuesto: Function;
}> = (props) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {props.isValidPresupuesto ? (
        <ControlPresupuesto
        presupuesto={props.presupuesto}
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
