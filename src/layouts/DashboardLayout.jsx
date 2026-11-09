
import { NavLink, Outlet } from 'react-router-dom'

function DashboardLayout({ appData }) {
  const links = [
    { to: '/', label: 'Inventario', icon: '📦', end: true },
    { to: '/agregar', label: 'Agregar producto', icon: '➕' },
    { to: '/carrito', label: 'Carrito', icon: '🛒' },
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-emerald-800 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">SuperMarket</h1>
            <p className="text-sm text-emerald-100">
              Sistema de gestión de inventario
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white text-emerald-800'
                      : 'text-white hover:bg-emerald-700'
                  }`
                }
              >
                {link.icon} {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Outlet context={appData} />
      </main>

      <footer className="mt-10 border-t bg-white py-5 text-center text-sm text-slate-500">
        SuperMarket © 2026 - Gestión de inventario
      </footer>
    </div>
  )
}

export default DashboardLayout
