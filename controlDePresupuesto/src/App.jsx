import { useState } from 'react';
import Header from './components/Header.jsx';


function App() {

  const [presupuesto, setPresupuesto ] = useState(0)

  return (
    <>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
      />    
    </>
  )
}

export default App