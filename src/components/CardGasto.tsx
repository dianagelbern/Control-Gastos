import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Gasto } from "../interfaces/Gasto";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
type iconOptions = {
  [key: string]: string;
};
const diccionarioIconos: iconOptions = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const CardGasto: React.FC<{
  setGastoEditar: Function;
  gasto: Gasto;
  eliminarGasto: Function;
}> = (props) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => props.setGastoEditar(props.gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => props.eliminarGasto(props.gasto.id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={diccionarioIconos[props.gasto.categoria]}
              alt="Icono Gasto"
            />
            <div className="descripcion-gasto">
              <p className="categoria">{props.gasto.categoria}</p>
              <p className="nombre-gasto">{props.gasto.nombre}</p>
              <p className="fecha-gasto">
                Agregado el: <span>{props.gasto.fecha}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${props.gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default CardGasto;
