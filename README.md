### Features

- Soporte para Markdown estándar / CommonMark y GFM (GitHub Flavored Markdown);
- Full-featured: Vista previa en tiempo real, carga de imágenes (cross-domain), bloques de código con resaltado, inserción de tablas, ToC (Tabla de Contenido), listas de tareas, @mentions, etc.
- Interfaz moderna basada en Material Design con Material UI;
- Conexión dinámica a Firebase Firestore para carga y filtrado de productos;
- Manejo global del estado (Context API) para el carrito de compras;
- Notificaciones en tiempo real con React Toastify;
- Navegación en Single Page Application utilizando React Router.

# E-commerce Web App Brotto

![](./logo.png)

**Table of Contents**

[TOCM]

[TOC]

# H1: E-commerce Web App Brotto

Bienvenido a **E-commerce Web App Brotto**, tu tienda online para descubrir y adquirir cuadros exclusivos de arte. Esta aplicación, desarrollada con React, Firebase y Material UI, te permite explorar un catálogo de productos, ver detalles específicos, agregar artículos a tu carrito y completar el proceso de compra de forma fácil y dinámica.

## H2: Descripción del Proyecto

Esta aplicación de e-commerce es una Single Page Application (SPA) que:
- **Carga productos dinámicamente** desde Firebase Firestore.
- Permite **filtrar productos** por categorías mediante React Router.
- Usa **Material UI** para un diseño moderno y responsivo.
- Gestiona el estado global del carrito con **Context API**, mostrando el total y permitiendo modificar cantidades.
- Provee un **checkout** integrado que envía la orden a Firestore y muestra un número de orden de confirmación.

## H2: Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Firebase Firestore:** Base de datos NoSQL para almacenar productos y órdenes.
- **Material UI:** Conjunto de componentes estilizados según Material Design.
- **React Router:** Navegación en SPA sin recarga de página.
- **Context API:** Gestión global del estado del carrito.
- **React Toastify:** Notificaciones en tiempo real.

## H2: Instalación y Configuración

H3: Clonar el repositorio

```bash
git clone https://github.com/tatobrotto/ReactBrotto
cd ReactBrotto
