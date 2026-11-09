
import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Arroz Tucapel 1 kg',
      categoria: 'Abarrotes',
      precio: 1590,
      stock: 30,
      descripcion: 'Arroz grado 1, ideal para acompañar tus comidas.',
      imagen: '🍚',
    },
    {
      id: 2,
      nombre: 'Leche Colun 1 L',
      categoria: 'Lácteos',
      precio: 1190,
      stock: 25,
      descripcion: 'Leche entera natural de larga vida.',
      imagen: '🥛',
    },
    {
      id: 3,
      nombre: 'Manzanas rojas 1 kg',
      categoria: 'Frutas y verduras',
      precio: 1990,
      stock: 20,
      descripcion: 'Manzanas rojas frescas y seleccionadas.',
      imagen: '🍎',
    },
    {
      id: 4,
      nombre: 'Aceite vegetal 1 L',
      categoria: 'Abarrotes',
      precio: 2490,
      stock: 15,
      descripcion: 'Aceite vegetal para cocinar.',
      imagen: '🫒',
    },
    {
      id: 5,
      nombre: 'Yogur natural 1 L',
      categoria: 'Lácteos',
      precio: 1890,
      stock: 18,
      descripcion: 'Yogur natural cremoso.',
      imagen: '🥣',
    },
    {
      id: 6,
      nombre: 'Pan de molde',
      categoria: 'Panadería',
      precio: 1790,
      stock: 12,
      descripcion: 'Pan de molde ideal para desayunos y colaciones.',
      imagen: '🍞',
    },
  ])

  const [carrito, setCarrito] = useState([])

  const agregarProducto = (producto) => {
    const nuevoProducto = {
      ...producto,
      id: Date.now(),
    }

    setProductos((actuales) => [...actuales, nuevoProducto])
  }

  const agregarAlCarrito = (id) => {
    const producto = productos.find((p) => p.id === id)

    if (!producto || producto.stock <= 0) return false

    setProductos((actuales) =>
      actuales.map((p) =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    )

    setCarrito((actual) => {
      const existe = actual.find((p) => p.id === id)

      if (existe) {
        return actual.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      }

      return [...actual, { ...producto, cantidad: 1 }]
    })

    return true
  }

  const modificarCantidad = (id, cambio) => {
    const producto = productos.find((p) => p.id === id)
    const item = carrito.find((p) => p.id === id)

    if (!producto || !item) return

    if (cambio > 0 && producto.stock <= 0) return

    setCarrito((actual) =>
      actual
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad + cambio } : p
        )
        .filter((p) => p.cantidad > 0)
    )

    setProductos((actuales) =>
      actuales.map((p) =>
        p.id === id ? { ...p, stock: p.stock - cambio } : p
      )
    )
  }

  const appData = {
    productos,
    carrito,
    agregarProducto,
    agregarAlCarrito,
    modificarCantidad,
  }

  return <AppRoutes appData={appData} />
}

export default App
