import React, {useState} from 'react'
import Error from './Error.js';
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Gastos = ({setGasto, setCrearGasto, restante}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    //al agregar gasto
    const agregarGasto = e =>{
        e.preventDefault()
        //validar
        if(nombre.length<=0 || !(isNaN(nombre))){
            setError(true)
            setErrorMsg('Incorrect or null expense')
            return
        }
        if(cantidad<=0 || isNaN(cantidad)){
            setError(true)
            setErrorMsg('Incorrect or null quantity')
            return
        }
        
        if(cantidad > restante){
            setError(true)
            setErrorMsg('you are past your budget')
            return
        }
        //construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //pasar gasto a comp principal
        setGasto(gasto)
        setCrearGasto(true)
        //reiniciar form
        setNombre('')
        setCantidad(0)

    }


    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Add your expenses</h2>
            {error ? <Error mensaje={(errorMsg)} />: null}    
            <div className="campo">
                <label>Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Transport"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="400"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-witdh"
                value="Add expense"
            />
        </form>
    )
}

Gastos.propTypes={
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired

}


export default Gastos