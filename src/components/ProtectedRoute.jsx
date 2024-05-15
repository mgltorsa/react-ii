import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = (props) => {
  const { estaLogeado } = useContext(UserContext);

  if (!estaLogeado) {
    return <Navigate to="/login" />;
  }
  return <>{props.children}</>;
};

export default ProtectedRoute;
