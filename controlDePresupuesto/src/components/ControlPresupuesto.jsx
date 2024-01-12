import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {

        return cantidad.toLocaleString('es-CL', {
            style:'currency',
            currency:'CLP'
        
        })
        
    }



  return (
    <section className='contenedor-presupuesto contenedor sombra dos-columnas '>
        <div> 
            <p> Gráfica aquí</p>
        </div>

        <div className='contenido-presupuesto'> 
            <p> 
                <span> Presupuesto:</span>
               {' '} {formatearCantidad(presupuesto)}
            </p>

            <p> 
                <span> Disponible:</span>
               {' '} {formatearCantidad(presupuesto)}
            </p>

            <p> 
                <span> Gastado:</span>
               {' '} {formatearCantidad(presupuesto)}
            </p>
        </div>
    </section>
  )
}

export default ControlPresupuesto