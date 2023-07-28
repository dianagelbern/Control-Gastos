import React from 'react'
import { Gasto } from '../interfaces/Gasto';
import CardGasto from './CardGasto';

const ListadoGastos : React.FC<{
    gastos: Gasto[];
  }> = (props) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{props.gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
        {props.gastos?.map((gasto: Gasto) => <CardGasto key={gasto.id} gasto={gasto}/>)}
    </div>
  )
}

export default ListadoGastos