# SuperMarket - Sistema de Gestión de Inventario

## Descripción

SuperMarket es una aplicación web desarrollada con React que permite administrar el inventario de un supermercado. Cuenta con funcionalidades para visualizar productos, filtrarlos por categoría, consultar sus detalles y gestionar un carrito de compras con actualización automática del stock.

## Funcionalidades

- **Inventario:** visualización de los productos disponibles con su nombre, categoría, precio, descripción y stock.
- **Filtro por categoría:** permite buscar productos según su categoría sin modificar el inventario original.
- **Agregar productos:** permite registrar nuevos productos indicando sus datos y cantidad disponible.
- **Detalle del producto:** muestra la información completa de cada producto seleccionado.
- **Carrito de compras:** permite agregar productos y modificar sus cantidades.
- **Actualización de stock:** el inventario se actualiza automáticamente al agregar o retirar unidades del carrito.

## Tecnologías utilizadas

- React 19
- JavaScript
- Vite
- React Router DOM
- Tailwind CSS
- Git y GitHub
- GitHub Pages

## Estructura del proyecto

```text
supermercado/
├── public/
├── src/
│   ├── assets/
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── Inventario.jsx
│   │   ├── AgregarProducto.jsx
│   │   ├── DetalleProducto.jsx
│   │   └── Carrito.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y ejecución

Para ejecutar el proyecto localmente:

1. Clonar el repositorio:

```bash
git clone https://github.com/MaBrambilla32/supermercado-maria-brambilla-002a.git
```

2. Ingresar a la carpeta:

```bash
cd supermercado-maria-brambilla-002a
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Construcción y publicación

Para generar la versión de producción:

```bash
npm run build
```

Para publicar en GitHub Pages:

```bash
npm run deploy
```

## Repositorio

[Ver código fuente en GitHub](https://github.com/MaBrambilla32/supermercado-maria-brambilla-002a)

## Publicación

Proyecto publicado mediante GitHub Pages.

Desarrollado por **María Brambilla** - Curso **002A**.
