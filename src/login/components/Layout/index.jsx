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
