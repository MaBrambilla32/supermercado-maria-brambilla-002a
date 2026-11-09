
import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function Inventario() {
  const { productos } = useOutletContext()
  const [categoria, setCategoria] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const categorias = [
    'Todas',
    ...new Set(productos.map((p) => p.categoria)),
  ]

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoria === 'Todas' || producto.categoria === categoria

    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    return coincideCategoria && coincideBusqueda
  })

  const formatoPrecio = (precio) =>
    precio.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    })

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Inventario de productos
          </h2>
          <p className="mt-2 text-slate-500">
            Administra y consulta los productos del supermercado.
          </p>
        </div>

        <Link
          to="/agregar"
          className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          + Agregar producto
        </Link>
      </div>

      <div className="mb-6 grid gap-4 rounded-xl bg-white p-5 shadow-sm sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Buscar producto
          </label>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Escribe el nombre del producto..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Filtrar por categoría
          </label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-600"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-500">
        Mostrando {productosFiltrados.length} de {productos.length} productos
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productosFiltrados.map((producto) => (
          <article
            key={producto.id}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-5xl">{producto.imagen}</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                {producto.categoria}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-800">
              {producto.nombre}
            </h3>

            <p className="mt-2 min-h-12 text-sm text-slate-500">
              {producto.descripcion}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-emerald-700">
                {formatoPrecio(producto.precio)}
              </span>

              <span
                className={`text-sm font-semibold ${
                  producto.stock > 0 ? 'text-slate-600' : 'text-red-600'
                }`}
              >
                Stock: {producto.stock}
              </span>
            </div>

            <Link
              to={`/productos/${producto.id}`}
              className="mt-5 block rounded-lg bg-emerald-700 py-3 text-center font-semibold text-white hover:bg-emerald-800"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p className="rounded-xl bg-white p-8 text-center text-slate-500">
          No se encontraron productos.
        </p>
      )}
    </section>
  )
}

export default Inventario
