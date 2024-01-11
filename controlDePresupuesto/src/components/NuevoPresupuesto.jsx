import {useState} from 'react';
import Mensaje from './Mensaje.jsx';


const NuevoPresupuesto = ({ 
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    //Handle es el nombre que usualmente se le colocan a las funciones que administran
    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto ||  presupuesto < 0) {
            setMensaje("No es un presupuesto válido")

            return            
        } 
        setMensaje('')
        setIsValidPresupuesto(true)
        
        console.log(presupuesto)
        

    }

  return (
    <section className='contenedor-presuuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label> Definir Presupuesto</label>

                <input 
                className='nuevo-presupuesto'
                type='number'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={ (e) => setPresupuesto(Number(e.target.value))}
                />

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
            </div>
            
        </form>
    </section>
  )
}

export default NuevoPresupuesto