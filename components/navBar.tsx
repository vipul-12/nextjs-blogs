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
          <div className="links">
            <Link href="/">
              <li>Home</li>
            </Link>
          </div>
          <div className="links">
            <Link href="/about">
              <li>About</li>
            </Link>
          </div>
          <div className="links">
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
          </div>
          <div className="links">
            <Link href="/contact">
              <li>Contact the Bat</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
