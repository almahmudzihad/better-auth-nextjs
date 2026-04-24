import { Link, Button  } from "@heroui/react";

import React from "react";

const NavBar = () => {
  return (
    <div className="w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      {/* Basic */}
      <nav className="container mx-auto sticky top-0 z-40 ">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
           
            <p className="font-bold">Zihad Learn NextJS</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/auth/signin">SignIn</Link>
            </li>
          </ul>
        </header>
      </nav>

      
    </div>
  );
};

export default NavBar;
