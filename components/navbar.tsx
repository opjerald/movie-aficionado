"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { links } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-[1] w-full bg-transparent py-5 transition-all duration-300",
        scrolling && "backdrop-blur-lg",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-md font-bold uppercase tracking-widest text-primary md:text-lg">
          <span className="rounded-md bg-primary p-2 text-white dark:text-black">
            Movie
          </span>{" "}
          Aficionado
        </h1>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    "text-white decoration-2 underline-offset-[6px] transition-all ease-in-out hover:underline",
                    pathname === link.path && "underline",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button variant="link" size="icon">
            <SearchIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
