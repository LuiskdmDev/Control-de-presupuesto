import {useState} from 'react';
import mensaje from './Mensaje.jsx';


const NuevoPresupuesto = ({ presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    //Handle es el nombre que usualmente se le colocan a las funciones que administran
    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number (presupuesto) < 0) {
            setMensaje("No es un presupuesto válido")
            
        } else {
            console.log("Es una cifra válida")
        }

    }

  return (
    <section className='contenedor-presuuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label> Definir Presupuesto</label>

                <input 
                className='nuevo-presupuesto'
                type='text'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={ (e) => setPresupuesto(e.target.value)}
                />

                <input type="submit" value="Añadir" />

                {mensaje && <mensaje tipo="error"> {mensaje} </mensaje>}
            </div>
            
        </form>
    </section>
  )
}

export default NuevoPresupuesto