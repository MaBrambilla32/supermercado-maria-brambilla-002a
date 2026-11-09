
import { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

function AgregarProducto() {
  const { agregarProducto } = useOutletContext()
  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: 'Abarrotes',
    precio: '',
    stock: '',
    descripcion: '',
    imagen: '📦',
  })

  const [error, setError] = useState('')

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setFormulario((actual) => ({ ...actual, [name]: value }))
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (
      !formulario.nombre.trim() ||
      !formulario.descripcion.trim() ||
      Number(formulario.precio) <= 0 ||
      Number(formulario.stock) < 0 ||
      formulario.precio === '' ||
      formulario.stock === ''
    ) {
      setError('Completa todos los campos con valores válidos.')
      return
    }

    agregarProducto({
      ...formulario,
      nombre: formulario.nombre.trim(),
      descripcion: formulario.descripcion.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
    })

    navigate('/')
  }

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-800">
          Agregar producto
        </h2>
        <p className="mt-2 text-slate-500">
          Registra un nuevo artículo en el inventario.
        </p>
      </div>

      <form
        onSubmit={manejarEnvio}
        className="space-y-5 rounded-xl bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block font-semibold">Nombre del producto</label>
          <input
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Ej: Fideos 400 g"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Categoría</label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={manejarCambio}
            className="w-full rounded-lg border bg-white p-3"
          >
            <option>Abarrotes</option>
            <option>Lácteos</option>
            <option>Frutas y verduras</option>
            <option>Panadería</option>
            <option>Bebidas</option>
            <option>Limpieza</option>
            <option>Congelados</option>
            <option>Otros</option>
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">Precio (CLP)</label>
            <input
              type="number"
              name="precio"
              min="1"
              value={formulario.precio}
              onChange={manejarCambio}
              placeholder="1500"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Stock disponible</label>
            <input
              type="number"
              name="stock"
              min="0"
              value={formulario.stock}
              onChange={manejarCambio}
              placeholder="20"
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Descripción</label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={manejarCambio}
            placeholder="Describe el producto..."
            rows="3"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Imagen representativa</label>
          <select
            name="imagen"
            value={formulario.imagen}
            onChange={manejarCambio}
            className="w-full rounded-lg border bg-white p-3"
          >
            {['📦', '🥛', '🍎', '🍞', '🥩', '🥤', '🧀', '🧹'].map((emoji) => (
              <option key={emoji} value={emoji}>{emoji}</option>
            ))}
          </select>
        </div>

        {error && (
          <p className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Guardar producto
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-lg border px-5 py-3 font-semibold text-slate-600 hover:bg-slate-100"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  )
}

export default AgregarProducto
