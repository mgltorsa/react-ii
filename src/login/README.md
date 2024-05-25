# Creando Aplicaciones Interactivas con ReactJS

## Resumen
En este codelab, implementaremos un Login en una aplicación web

## Objetivos
- Implementar una funcionalidad de login en React


## Requisitos previos
- Conocimientos básicos de HTML, CSS y JavaScript.
- Un editor de código instalado en tu máquina.

## Configuración inicial

1. Abre tu terminal y crea un nuevo proyecto de React usando el siguiente comando:
```npm create vite@latest my-react-app -- --template react```


2. Navega a la carpeta de tu proyecto e inicia el servidor de desarrollo con:

```
cd my-react-app
npm run dev
```

3. Abre tu navegador en `http://localhost:$PORT` para ver tu aplicación en desarrollo. ```buscar por $PORT in la consola ```

4. Instala las dependencias requeridas para el ejercicio: Redux, React-Redux y React Router DOM.

```npm i @reduxjs/toolkit react-redux react-router-dom```

## Paso 1: Estructura de la Aplicación.
En primer lugar, vamos a definir la estructura de nuestra aplicación web. Empezaremos por abrir el archivo ```App.jsx```.

En este archivo usaremos React Router Dom para definir la estructura de rutas de nuestra aplicación. 

***Tarea*** 
1. Define una estructura que cuente con las siguientes rutas: Home, Login, Perfil y pagina 404 (Not found)
2. Por ahora cada ruta debe renderizar un div que contenga el nombre de la ruta.

<details>
<summary>Solución</summary>




```javascript
// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<div>Home</div>} />
            <Route path="login" element={<div>Login</div>} />
            <Route path="perfil" element={<div>perfil</div>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
```
</details>

### Paso 1.1: Creación de un Layout
Para organizar mejor nuestras rutas vamos a crear un layout, para que cada vista contenga un conjunto de componentes por defecto. En este caso, el layout contendrá el header, la barra de navegación y el footer de la aplicación.

Recuerda usar el componente ```Outlet``` para poder mostrar las diferentes vistas de  nuestra estructura de rutas en el componente **Layout**.

***Tarea***
1. Definir el componente ```Layout.jsx``` en la carpeta components.
2. Recibir las opciones de la barra de navegación como propiedades del component.
3. Imprimir las opciones como links de navegación.


<details>
<summary>Solución</summary>

```javascript

import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ options }) => {
  return (
    <div style={{width:"100%"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 8,
          alignContent: "space-around",
        }}
      >
        {options.map((option, index) => (
          <div key={index}>
            <Link to={option.to}>{option.title}</Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

export default Layout;


```

</details>


Por último, agregamos el layout a nuestra estructura de rutas en ```App.jsx```:

```javascript
// App.jsx
const appOptions = [
  {
    title: "Home",
    to: "",
  },
  {
    title: "Login",
    to: "login",
  },
]
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <Layout
                options={appOptions}
              />
            }
          >
            <Route path="" element={<HomeView />} />
            <Route path="login" element={<div>Login</div>} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```


## Paso 2: Crear un formulario de login simple

Para este caso crearemos la carpeta ```views``` donde guardaremos las vistas de nuestra aplicación.

A continuación crearemos la vista ```Login.jsx``` que contendrá un formulario simple de login.

```javascript
// views/LoginView.jsx

const LoginView = () => {

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      <form>
        <input
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginView.propTypes = {};

export default LoginView;
```

Ahora, necesitamos agregar la lógica para manejar la información del formulario y los cambios que haga el usuario. Para esto usaremos el hook ```useState```.


```javascript
// views/LoginView.jsx
const LoginView = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
   
  };

  const handleFormChange = (evento) => {
    const inputName = evento.target.name;
    const inputValue = evento.target.value;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
  };
  return <div>....vista</div>
}
```

***Tarea***
1. Implementar el formulario de login, de manera que al dar click al botón submit, en consola se imprima "Login" y la información actual del formulario.


Finalmente, agregaremos está pagina a nuestra estructura de rutas en el archivo ```App.jsx```.


***Tarea***
1. Crear las paginas de Home y 404.


## Paso 3: Creación del Store para la aplicación
Existen diversas maneras de proveer a nuestra aplicación con un estado global, entre esas opciones se encuentran React Context y Redux. Para nuestro caso usaremos Redux.

Crearemos el archivo ```store.js``` en nuestro proyecto, entonces definiremos y exportaremos el estado o store global de nuestra aplicación usando Redux Toolkit.

```javascript
// store.js
export default configureStore({
  
});

```

A continuación, haremos que nuestra aplicación de React empiece a usar el estado global que acabamos de crear.

```javascript
// App.jsx
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          ...rutas
        </BrowserRouter>
      </Provider>
    </>
  );
}
```

Con esto, ya hemos hecho configurado nuestra aplicación para que todos los componentes en nuestra estructura de rutas puedan acceder al estado global de la aplicación.


## Paso 4: Creando slices
Los slices son objetos de Redux que nos permiten crear de una manera sencilla los reductores, los estados y las acciones de nuestra aplicación. Para este ejercicio crearemos un slice para la funcionalidad: **login**.

Recordemos como luce redux a nivel visual:
![Redux architecture](redux.png)

A continuación crearemos la carpeta **slices** y dentro el archvio ```auth.js```.

Para crear el slice the autenticación, importaremos la función **createSlice** de la libreria ReduxToolkit. Dentro de nuestro slice vamos a crear 2 reductores: **login** y **logout**. Recordemos que cuando usamos **slices** la librería ReduxToolkit se encarga de crear los reductores y acciones correspondientes.

```javascript
// slices/auth.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    autenticado: false,
  },
  reducers: (create) => ({
    login: (state, action)=>{},
    logout: ()=>{}
  }),
});

//Exportamos el slice y las acciones creadas por el slice:
export default authSlice;
export const { login, logout } = authSlice.actions;
```

***Tarea***
1. Implementar la función de login. Cuando se llame a esta función el estado de la aplicación debe cambiar el valor de ```autenticado``` a **true**
2. Implementar la función de logout para cambiar el valor de ```autenticado``` a **false**

## Paso 5: Agregar reductor al store global
En el archivo **store.js** vamos a agregar el reductor que creamos en el paso anterior. Para ello vamos a importar el reductor y una función llamada ```combineSlices``` de la libreria de ReduxToolkit.

Luego, crearemos una constante llamada **rootReducer** donde uniremos todos los reductores. A continuación, a la pasaremos un objeto para la función **configureStore** que contendrá nuestro **rootReducer**:

```javascript
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import auth from "../slices/auth";

export const rootReducer = combineSlices(auth); //Se pueden pasar multiples slices para combinarlos todos en uno solo (rootReducer)

export default configureStore({
  reducer: rootReducer,
});

```


## Paso 6: Realizar acción de login
Desde la vista **Login** deberemos llamar a las acciones creadas por ReduxToolkit. Para esto, importaremos 2 funciones ```useSelector``` para acceder al estado global creado por redux, y ```useDispatch``` para acceder a la función dispatch para llamar a las funciones que creamos en los slices.

```javascript

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginView = () => {
  const autenticado = useSelector((state) => {
    return state.auth.autenticado;
  });

  const dispatch = useDispatch();
  return <div>...vista</div>
}
```


***Tarea***
1. Llamar a la acción login cuando el usuario le da click al botón de enviar formulario.

<details>
<summary>Solución</summary>

```javascript

  const handleLogin = (evento) => {
    evento.preventDefault();
    console.log("Login");
    dispatch(login())
  };

```

</details>

## Paso 7 y tarea:
Crear la vista de logout con un botón para cerrar sesión. Llamar a la acción logout cuando el usuario hace click en cerrar sesión.

## Paso 8 y tarea:
Proteger la vista perfil de manera que solo pueda ser observada cuando el usuario ha hecho login, es decir, el usuario está autenticado.


## Evidencia a entregar
Entregar una aplicación con una funcionalidad de login implementada. Se debe hacer uso de ReduxJS y React Router DOM para su implementación.