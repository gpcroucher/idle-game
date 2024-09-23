import { Link } from "react-router-dom";
import "./NavBar.css";
import PropTypes from "prop-types";

export default function NavBar(props) {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/inventory" },
    { name: "Junkheap", link: "/junkheap" },
  ];

  return (
    <div className="navbar">
      {/* <Link to="/">Home</Link>
      <Link to="/junkheap">Junkheap</Link> */}

      {pages.map((page) => {
        if (page.link !== props.exclude) {
          return (
            <Link key={page.link} to={page.link}>
              {page.name}
            </Link>
          );
        }
      })}
    </div>
  );
}

NavBar.propTypes = {
  exclude: PropTypes.object,
};
