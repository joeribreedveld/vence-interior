// Imports
import Link from "next/link";
import classNames from "classnames";
import { INavLinkProps } from "./Navbar.types";

// Functions
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 px-16">
      <section>
        <h2 className="text-lg font-bold text-[#495057]">
          VENCE<span className="text-[#DDBEA9]">.</span>
        </h2>
      </section>
      <section>
        <ul className="flex items-center gap-6">
          <NavLink isActive={true}>Example</NavLink>
          <NavLink>Inspiration</NavLink>
          <NavLink>Tutorials</NavLink>
          <NavLink>Courses</NavLink>
        </ul>
      </section>
      <section>Languages</section>
    </nav>
  );
};

const NavLink = ({ isActive, children }: INavLinkProps) => (
  <li>
    <Link
      href="#"
      className={classNames("text-xs font-medium text-[#495057]", {
        "border-b-2 border-[#DDBEA9] pb-1 text-[#495057] opacity-100": isActive,
        "opacity-50": !isActive,
      })}
    >
      {children}
    </Link>
  </li>
);

// Exports
export default Navbar;
