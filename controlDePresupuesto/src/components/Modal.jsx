import CerrarBtn from '../img/cerrar.svg';

const Modal = ( {setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
          setModal(false)
        }, 250)
    }

  return (
    <div className="modal">
            <div className=" cerrar-modal">
              <img 
              src={CerrarBtn}
              alt="Cerrar Btn"
              onClick={ocultarModal}
              />
            </div>
            <form className={`formulario ${animarModal ? "animar" : ''}`}>
              <legend>
                Nuevo Gasto
              </legend>

            </form>
            
    </div>
  )
}

export default Modal