import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  )
}
