import './App.css'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
            <AppRouter />
        </HashRouter>
      </div>
    </div>
  )
}

export default App
