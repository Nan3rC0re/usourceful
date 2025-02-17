import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col gap-4 text-center items-center w-full  max-w-[600px] md:max-w-[863px]">
        <h1 className="font-medium text-4xl md:text-6xl">
          Explore amazing academic and career resources.
        </h1>
        <p className="text-muted-foreground max-w-[480px]  w-full  text-sm md:text-base">
          A library of useful resources for computer science students. New
          resources added weekly.
        </p>
        <Button className="text-sm">Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
