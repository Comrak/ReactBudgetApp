import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Gasto from './components/Gastos'
import Listado from './components/Listado'
import Presupuesto from './components/Presupuesto'

function App() {
  //definiendo states 
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);

  //useeffect

  useEffect (() => {
    if(crearGasto){
      //agrega nuevo presupuesto
      setGastos([
          ...gastos,
          gasto
        ])
      //resta presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)
      setCrearGasto(false)
    }
  }, [gasto, setGasto, gastos, restante])

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {pregunta 
          ?
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          :
            <div className="row">
              <div className="one-half column">
                <Gasto
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <Presupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
