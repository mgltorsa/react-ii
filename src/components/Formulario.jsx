import { useContext, useEffect, useReducer, useRef } from "react";
import UserContext from "../contexts/UserContext";

const formReducer = (state, action) => {
  switch (action.type) {
    case "cambiarNombre": {
      const nuevoNombre = action.payload;
      if (nuevoNombre.length < 10) {
        return { ...state, nombre: action.payload };
      } else {
        return {
          ...state,
          error: "Nombre no debe contener mas de 10 caracteres",
        };
      }
    }
    case "cambiarApellido":
      return { ...state, apellido: action.payload };
    default:
      break;
  }
};

const Formulario = () => {
  const user = useContext(UserContext);

  const nameRef = useRef(null);
  const [state, dispatch] = useReducer(formReducer, {
    nombre: "",
    apellido: "",
    error: "",
  });

  useEffect(() => {
    console.log("context", user);
  }, [user]);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("nombre: ", state.nombre);
  }, [state.nombre]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Nombre:</label>
      <input
        ref={nameRef}
        name="nombre"
        placeholder="Escriba su nombre..."
        onChange={(evt) =>
          dispatch({ type: "cambiarNombre", payload: evt.target.value })
        }
        value={state.nombre}
      />
      <label>Apellido:</label>
      <input
        name="apellido"
        placeholder="Escriba su apellido..."
        value={state.apellido}
        onChange={(evt) =>
          dispatch({ type: "cambiarApellido", payload: evt.target.value })
        }
      />
      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
};

export default Formulario;
