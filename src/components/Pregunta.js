import React, {Fragment , useState} from 'react';
import Error from './Error.js';
import PropTypes from 'prop-types'


const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {

    //definir state 

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //funcion que lee presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value,10))
    }
    
    //submit para definir presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault()

        //validar
        if(cantidad < 1 || 
            isNaN(cantidad)){
            setError(true)
            return
        }
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setPregunta(false)

    }
    

    return (
        <Fragment>
            <h2>Enter your budget</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto" />: null}    
            
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget here..."
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired, 
    setRestante: PropTypes.func.isRequired, 
    setPregunta: PropTypes.func.isRequired
}

export default Pregunta;