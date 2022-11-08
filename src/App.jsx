import './App.css'
import { LoginPage } from './auth/pages/LoginPage'
import { RegisterPage } from './auth/pages/RegisterPage'
import { CitasPage } from './citas/pages/CitasPendientesPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <CitasPage />
        {/* <LoginPage />  */}
        {/* <RegisterPage /> */}
      </div>
    </div>
  )
}

export default App
