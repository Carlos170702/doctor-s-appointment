import './App.css'
import { LoginPage } from './auth/pages/LoginPage'
import { RegisterPage } from './auth/pages/RegisterPage'
import { CitaClientPage } from './citas/pages/CitaClientPage'
import { CitasPage } from './citas/pages/CitasPendientesPage'
import { NewCita } from './citas/pages/NewCita'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './router/Routers'

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
