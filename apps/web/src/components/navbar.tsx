import { Link } from "@tanstack/react-router";
import { IconCarGarage } from "@tabler/icons-react";
import { buttonVariants } from "./ui/button";
import { motion } from "motion/react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/rotacao", label: "Rotação" },
  { href: "/colaboradores", label: "Colaboradores" },
  { href: "/configuracoes", label: "Configurações" },
];

export const NavBar = () => {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <Link to="/">
            <IconCarGarage />
          </Link>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                activeOptions={{ exact: true }}
                activeProps={{
                  className: buttonVariants({
                    variant: "default",
                    className: "relative",
                  }),
                }}
                inactiveProps={{
                  className: buttonVariants({
                    variant: "ghost",
                    className: "relative",
                  }),
                }}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-primary"
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};