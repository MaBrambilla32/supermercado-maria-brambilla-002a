
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'

const Inventario = lazy(() => import('../pages/Inventario'))
const AgregarProducto = lazy(() => import('../pages/AgregarProducto'))
const DetalleProducto = lazy(() => import('../pages/DetalleProducto'))
const Carrito = lazy(() => import('../pages/Carrito'))

function AppRoutes({ appData }) {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className="p-8 text-center">Cargando pantalla...</p>}>
        <Routes>
          <Route path="/" element={<DashboardLayout appData={appData} />}>
            <Route index element={<Inventario />} />
            <Route path="agregar" element={<AgregarProducto />} />
            <Route path="productos/:id" element={<DetalleProducto />} />
            <Route path="carrito" element={<Carrito />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
