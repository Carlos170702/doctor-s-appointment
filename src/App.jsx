import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'


function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
