import './App.css'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './context/authProvider'


function App() {
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </HashRouter>
      </div>
    </div>
  )
}

export default App
