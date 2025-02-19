import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header>
      <div className="header-section">
        <h1 className="font-medium text-4xl md:text-6xl">
          Explore amazing academic and career resources.
        </h1>
        <p className="sub-header">
          A library of useful resources for computer science students. New
          resources added weekly.
        </p>
        <Button>Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
