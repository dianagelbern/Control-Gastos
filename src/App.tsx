import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { Modal } from "./components/Modal";
import { Gasto } from "./interfaces/Gasto";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [gastoEditar, setGastoEditar] = useState({});
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  const formatDate = () => {
    const date = Date.now();
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES");
  };

  const guardarGasto = (gasto: Gasto) => {
    if (gasto.id) {
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado);
      setGastoEditar({});
    } else {
      const random = Math.random().toString(16).slice(2);

      gasto.id = random;
      gasto.fecha = formatDate();
      setGastos([...gastos, gasto]);
    }
    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };

  const eliminarGasto = (id: string) => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
            setGastoEditar={setGastoEditar} 
            gastos={gastos} 
            eliminarGasto={eliminarGasto}
            />
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
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
