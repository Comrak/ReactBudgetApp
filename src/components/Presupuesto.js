import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helper'
import PropTypes from 'prop-types'


const Presupuesto = ({presupuesto,restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Initial Budget: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Remaining Budget: ${restante}
            </div>
        </Fragment>
    );
};

Presupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default Presupuesto;