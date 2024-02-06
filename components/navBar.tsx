import React from "react";
import Link from "next/Link";
const NavBar = () => {
  return (
    <>
      <style jsx>
        {`
          .navigation {
            display: flex;
            justify-content: center;
          }

          .navigation ul {
            margin-top: 1rem;
            display: flex;
          }

          .navigation li {
            list-style: none;
            margin: 0 1.5rem;
            font-weight: bold;
            font-size: 1.3rem;
          }

          .links {
            text-decoration: none;
            color: black;
          }
        `}
      </style>
      <nav className="navigation">
        <ul>
          <Link href="/" style={{ color: "black", "text-decoration": "none" }}>
            <li>Home</li>
          </Link>

          <Link
            href="/about"
            style={{ color: "black", "text-decoration": "none" }}
          >
            <li>About</li>
          </Link>

          <Link
            href="/blogs"
            style={{ color: "black", "text-decoration": "none" }}
          >
            <li>Blogs</li>
          </Link>

          <Link
            href="/contact"
            style={{ color: "black", "text-decoration": "none" }}
          >
            <li>Contact the Bat</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
