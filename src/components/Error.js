import React from 'react'
import PropTypes from 'prop-types'


function Error({mensaje}) {
    return (
        <p className= "alert alert-danger error"> 
            {mensaje}
        </p>
    )
}

Error.propTypes = {
    mensajes: PropTypes.string.isRequired
}

export default Error
