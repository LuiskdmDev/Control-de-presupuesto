import { useState } from 'react';
import Header from './components/Header.jsx';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal.jsx';



function App() {

  const [presupuesto, setPresupuesto ] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)


  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() =>{
      setAnimarModal(true)
    }, 250)
  }



  return (
    <>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto ={isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
        <img 
        src ={IconoNuevoGasto}
        alt="Icono Nuevo Gasto"
        onClick={handleNuevoGasto}
        />
      </div>
      )}

      {modal && <Modal 
      setModal = {setModal}
      animarModal = {animarModal}
      setAnimarModal = {setAnimarModal}
      /> }
      
    </>
  )
}

export default App
