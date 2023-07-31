import React from 'react'
import { Gasto } from '../interfaces/Gasto';
import CardGasto from './CardGasto';

const ListadoGastos : React.FC<{
  setGastoEditar: Function;
    gastos: Gasto[];
    eliminarGasto: Function
  }> = (props) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{props.gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
        {props.gastos?.map((gasto: Gasto) => <CardGasto key={gasto.id} setGastoEditar={props.setGastoEditar} gasto={gasto} eliminarGasto={props.eliminarGasto}/>)}
    </div>
  )
}

export default ListadoGastos