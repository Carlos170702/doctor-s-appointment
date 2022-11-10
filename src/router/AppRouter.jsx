import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { CitasRouter } from '../citas/router/citasRouter'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path='/login' element={
        <PublicRoutes>
          <LoginPage />
        </PublicRoutes >
      } />

      <Route path='/register' element={
        <PublicRoutes>
          <RegisterPage />
        </PublicRoutes >
      } />


      <Route path='/*' element={
        <PrivateRoutes>
          <CitasRouter />
        </PrivateRoutes>
      } />

    </Routes>
  )
}
