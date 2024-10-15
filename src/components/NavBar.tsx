import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props: { exclude: string }) {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/inventory" },
    { name: "Map", link: "/map" },
  ];

  return (
    <div className="navbar">
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
