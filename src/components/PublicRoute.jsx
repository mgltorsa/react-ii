import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const PublicRoute = (props) => {
  const { estaLogeado } = useContext(UserContext);

  if (estaLogeado) {
    return <Navigate to="/perfil" />;
  }
  return <>{props.children}</>;
};

export default PublicRoute;
