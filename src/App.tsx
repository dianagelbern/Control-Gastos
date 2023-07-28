import { useState } from "react";
import { Header } from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import {Modal} from "./components/Modal";
import { Gasto } from "./interfaces/Gasto";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }
  const formatDate = () => {
    const date = Date.now();
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
  }

  const guardarGasto = (gasto: Gasto) =>{
    const random = Math.random().toString(16).slice(2);

    gasto.id = random;
    gasto.fecha = formatDate()

    setGastos([...gastos, gasto]);
    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  }


  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
        <main>
          <ListadoGastos
          gastos={gastos}/>
        </main>
        <div className="nuevo-gasto">
          <img 
          src={IconoNuevoGasto} 
          alt="icono nuevo gasto" 
          onClick={handleNuevoGasto}
          />
        </div>
        </>
      )}
      {
        modal && 
        <Modal 
        setModal={setModal} 
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        />
      }
    </div>
  );
}

export default App;
