import './App.css'
import { LoginPage } from './auth/pages/LoginPage'
import { RegisterPage } from './auth/pages/RegisterPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <RegisterPage />
        <LoginPage />
      </div>
    </div>
  )
}

export default App
