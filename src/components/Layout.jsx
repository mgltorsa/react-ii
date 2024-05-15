import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const { estaLogeado } = useContext(UserContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <Link to="">Home</Link>
        {!estaLogeado && <Link to="login">Login</Link>}
        {estaLogeado && <Link to="perfil">Perfil</Link>}
      </div>
      <Outlet />
      <div>
        Footer
      </div>
    </>
  );
};

export default Layout;
