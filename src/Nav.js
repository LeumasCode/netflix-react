import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://lh3.googleusercontent.com/proxy/tSgU-HRA_wqJzHPHqrB1pzHf7AsT9jd8HEdkqcZ2PRvqn8OmSzeGtGxoKV5T"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
