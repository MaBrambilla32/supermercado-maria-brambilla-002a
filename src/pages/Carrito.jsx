
import { Link, useOutletContext } from 'react-router-dom'

function Carrito() {
  const { carrito, modificarCantidad } = useOutletContext()

  const formatoPrecio = (precio) =>
    precio.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    })

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  )

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Mi carrito</h2>
        <p className="mt-2 text-slate-500">
          Revisa tus productos y modifica las cantidades.
        </p>
      </div>

      {carrito.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <p className="text-5xl">🛒</p>
          <h3 className="mt-4 text-xl font-bold text-slate-800">
            Tu carrito está vacío
          </h3>
          <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white"
          >
            Ir al inventario
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {carrito.map((producto) => (
              <article
                key={producto.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{producto.imagen}</span>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      {producto.nombre}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {formatoPrecio(producto.precio)} por unidad
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => modificarCantidad(producto.id, -1)}
                    className="h-9 w-9 rounded-lg border font-bold hover:bg-slate-100"
                  >
                    −
                  </button>

                  <span className="min-w-6 text-center font-bold">
                    {producto.cantidad}
                  </span>

                  <button
                    onClick={() => modificarCantidad(producto.id, 1)}
                    className="h-9 w-9 rounded-lg border font-bold hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>

                <p className="w-full text-right font-bold text-emerald-700 sm:w-auto">
                  {formatoPrecio(producto.precio * producto.cantidad)}
                </p>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800">
              Resumen de compra
            </h3>
            <div className="my-5 flex justify-between border-b pb-4">
              <span className="text-slate-500">Total</span>
              <span className="text-xl font-bold text-emerald-700">
                {formatoPrecio(total)}
              </span>
            </div>
            <Link
              to="/"
              className="block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-800"
            >
              Seguir comprando
            </Link>
          </aside>
        </div>
      )}
    </section>
  )
}

export default Carrito
