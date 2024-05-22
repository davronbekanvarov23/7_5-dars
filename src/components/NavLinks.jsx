import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "Collections",
    path: "/collections",
  },
  {
    id: 3,
    text: "Men",
    path: "/men",
  },
  {
    id: 4,
    text: "Women",
    path: "/women",
  },
  {
    id: 5,
    text: "About",
    path: "/about",
  },

  {
    id: 6,
    text: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
