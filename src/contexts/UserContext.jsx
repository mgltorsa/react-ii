import { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [estaLogeado, setEstaLogeado] = useState(false);

  const login = () => {
    setEstaLogeado(true);
    //consumo de API
    //validar tokens

  };

  const cerrarSesion = () => {
    setEstaLogeado(false);
    //consumo de API
    //validar tokens
  };

  return (
    <UserContext.Provider
      value={{
        estaLogeado,
        login,
        cerrarSesion,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
