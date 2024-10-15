import { Link } from "react-router-dom";

export default function NavBar(props: { exclude: string }) {
  const pages = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/inventory" },
    { name: "Map", link: "/map" },
  ];

  return (
    <div className="mb-4 flex gap-px">
      {pages.map((page) => {
        if (page.link !== props.exclude) {
          return (
            <Link
              className="ml-0 block rounded-sm border border-[rgb(0,0,255)] p-2"
              key={page.link}
              to={page.link}
            >
              {page.name}
            </Link>
          );
        }
      })}
    </div>
  );
}
