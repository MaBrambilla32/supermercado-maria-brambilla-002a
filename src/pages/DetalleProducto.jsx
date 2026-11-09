
import { useState } from 'react'
import { Link, useParams, useOutletContext } from 'react-router-dom'

function DetalleProducto() {
  const { id } = useParams()
  const { productos, agregarAlCarrito } = useOutletContext()
  const [mensaje, setMensaje] = useState('')

  const producto = productos.find((p) => p.id === Number(id))

  const formatoPrecio = (precio) =>
    precio.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    })

  if (!producto) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">
          Producto no encontrado
        </h2>
        <Link to="/" className="mt-4 inline-block text-emerald-700 underline">
          Volver al inventario
        </Link>
      </div>
    )
  }

  const manejarAgregar = () => {
    const agregado = agregarAlCarrito(producto.id)

    setMensaje(
      agregado
        ? '¡Producto agregado al carrito!'
        : 'No hay stock disponible para este producto.'
    )
  }

  return (
    <section className="mx-auto max-w-3xl">
      <Link to="/" className="mb-6 inline-block font-semibold text-emerald-700 hover:underline">
        ← Volver al inventario
      </Link>

      <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-8xl">
            {producto.imagen}
          </div>

          <div className="flex-1">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              {producto.categoria}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-800">
              {producto.nombre}
            </h2>

            <p className="mt-3 text-slate-500">{producto.descripcion}</p>

            <p className="mt-4 text-3xl font-bold text-emerald-700">
              {formatoPrecio(producto.precio)}
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Disponibilidad en inventario</p>
          <p className={`mt-1 text-xl font-bold ${producto.stock > 0 ? 'text-emerald-700' : 'text-red-600'}`}>
            {producto.stock > 0
              ? `${producto.stock} unidades disponibles`
              : 'Producto agotado'}
          </p>
        </div>

        <button
          onClick={manejarAgregar}
          disabled={producto.stock <= 0}
          className="w-full rounded-lg bg-emerald-700 px-5 py-4 font-bold text-white hover:bg-emerald-800 disabled:bg-slate-400"
        >
          🛒 Agregar al carrito
        </button>

        {mensaje && (
          <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-center font-medium text-emerald-800">
            {mensaje}
          </p>
        )}

        <Link to="/carrito" className="mt-4 block text-center font-semibold text-emerald-700 hover:underline">
          Ir al carrito
        </Link>
      </article>
    </section>
  )
}

export default DetalleProducto
