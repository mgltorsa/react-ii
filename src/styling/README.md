# Creando Animaciones y Estilos CSS con React

## Resumen
En este codelab, implementaremos animaciones y estilos CSS en una aplicación web usando React y la biblioteca Framer Motion.

## Objetivos
- Implementar animaciones en React.
- Aplicar estilos CSS en componentes de React.

## Requisitos previos
- Conocimientos básicos de HTML, CSS y JavaScript.
- Un editor de código instalado en tu máquina.

## Configuración inicial

1. Abre tu terminal y crea un nuevo proyecto de React usando el siguiente comando:
    ```sh
    npm create vite@latest my-react-app -- --template react
    ```

2. Navega a la carpeta de tu proyecto e inicia el servidor de desarrollo con:
    ```sh
    cd my-react-app
    npm run dev
    ```

3. Abre tu navegador en `http://localhost:$PORT` para ver tu aplicación en desarrollo. **Busca por `$PORT` en la consola**.

4. Instala las dependencias requeridas para el ejercicio: Framer Motion.
    ```sh
    npm i framer-motion
    ```

## Paso 1: Estructura de la Aplicación
En primer lugar, vamos a definir la estructura de nuestra aplicación web. Empezaremos por abrir el archivo `App.jsx`.

### Tarea
1. Define una estructura que cuente con las siguientes rutas: Home, About, Contact y pagina 404 (Not found).
2. Por ahora cada ruta debe renderizar un div que contenga el nombre de la ruta.

#### Solución

```javascript
// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="contact" element={<div>Contact</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Paso 2: Añadir CSS a los Componentes
Vamos a añadir estilos CSS a nuestros componentes. Para este ejercicio, crearemos un archivo CSS y lo importaremos en nuestros componentes.

### Tarea
Crea un archivo App.css y define algunos estilos básicos.
Aplica estos estilos a los componentes de las vistas.

#### Solución
```css

/* App.css */
body {
  font-family: Arial, sans-serif;
}

.container {
  margin: 20px;
}

.header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
}

```

```javascript
// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mi Aplicación React</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<div>Home</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

```

## Paso 3: Crear un Layout con CSS
Para organizar mejor nuestras rutas vamos a crear un layout, para que cada vista contenga un conjunto de componentes por defecto, como un header y un footer.

### Tarea
Define el componente Layout.jsx en la carpeta components.
Aplica estilos CSS al layout.

#### Solución

```css
/* Layout.css */
nav {
  background-color: #61dafb;
  padding: 10px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}

footer {
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
}


```


```javascript
// Layout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

```

## Paso 4: Implementar Animaciones con Framer Motion

Vamos a añadir animaciones a nuestros componentes usando Framer Motion.

### Tarea
1. Instala Framer Motion: ```npm install framer-motion```
2. Crea un componente animado usando Framer Motion.

#### Solución
```javascript
// components/AnimatedBox.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#61dafb',
        margin: 'auto'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, loop: Infinity }}
    />
  );
};

export default AnimatedBox;

```

```javascript
// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AnimatedBox from './components/AnimatedBox';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mi Aplicación React</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AnimatedBox />} />
            <Route path="about" element={<div>About</div>} />
            <Route path="contact" element={<div>Contact</div>} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

## Paso 5: Crear Transiciones Animadas
Vamos a crear transiciones animadas entre las diferentes rutas usando Framer Motion.

### Tarea
Crea un componente PageTransition que envuelva las rutas y aplique animaciones de entrada y salida.

#### Solución
```javascript
// components/PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
```

```javascript

// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import AnimatedBox from './components/AnimatedBox';

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <header className="header">
        <h1>Mi Aplicación React</h1>
      </header>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PageTransition>
                    <AnimatedBox />
                  </PageTransition>
                }
              />
              <Route
                path="about"
                element={
                  <PageTransition>
                    <div>About</div>
                  </PageTransition>
                }
              />
              <Route
                path="contact"
                element={
                  <PageTransition>
                    <div>Contact</div>
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <div>404</div>
                  </PageTransition>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

## Paso 6: Probar y Ajustar
Prueba tu aplicación para asegurarte de que las animaciones y los estilos funcionan correctamente. Ajusta los estilos y las animaciones según sea necesario.

## Conclusión
Has aprendido a implementar animaciones y aplicar estilos CSS en una aplicación React usando Framer Motion y CSS. Puedes expandir este conocimiento para crear interfaces de usuario más dinámicas y atractivas.