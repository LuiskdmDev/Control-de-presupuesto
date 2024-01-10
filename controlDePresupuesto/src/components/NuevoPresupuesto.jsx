import React from 'react'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto}) => {
  return (
    <section className='contenedor-presuuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label> Definir Presupuesto</label>

                <input 
                lassName='nuevo-presupuesto'
                type='text'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={ (e) => setPresupuesto(e.target.value)}
                />

                <input type="submit" value="Añadir" />
            </div>
            
        </form>
    </section>
  )
}

export default NuevoPresupuesto