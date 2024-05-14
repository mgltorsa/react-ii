import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Layout = ({ options }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {options.map((option, index) => (
        <div key={index}>
          <Link to={option.to}>{option.title}</Link>
        </div>
      ))}
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
