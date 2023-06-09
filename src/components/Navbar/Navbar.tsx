// Imports
import Link from "next/link";
import classNames from "classnames";
import { type INavLinkProps } from "./Navbar.types";

// Functions
const Navbar = () => (
  <nav className="page-width flex items-center justify-between py-8">
    <section>
      <h3 className="text-lg font-bold text-[#495057] hover:cursor-pointer">
        VENCE<span className="text-[#DDBEA9]">.</span>
      </h3>
    </section>
    <section className="hidden md:block">
      <ul className="flex items-center gap-6">
        <NavLink isActive={true}>Example</NavLink>
        <NavLink>Inspiration</NavLink>
        <NavLink>Tutorials</NavLink>
        <NavLink>Courses</NavLink>
      </ul>
    </section>
    <section className="flex items-center gap-6 text-xs">
      <ul className="flex items-center gap-6">
        <li className="opacity-50">
          <a href="#" className="font-medium hover:cursor-pointer">
            Fb
          </a>
        </li>
        <li className="opacity-50">
          <a href="#" className="font-medium hover:cursor-pointer">
            Tw
          </a>
        </li>
        <li className="opacity-50">
          <a href="#" className="font-medium hover:cursor-pointer">
            Ln
          </a>
        </li>
      </ul>
      <div className="h-[1.5rem] w-[1px] bg-[#E5E5E5]"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        className="hover:cursor-pointer"
      >
        <path
          d="M11.8368 10.3765L9.49991 8.03965C9.39444 7.93417 9.25146 7.87558 9.10145 7.87558H8.71939C9.36631 7.04817 9.75071 6.00747 9.75071 4.87536C9.75071 2.18219 7.56852 0 4.87536 0C2.18219 0 0 2.18219 0 4.87536C0 7.56852 2.18219 9.75071 4.87536 9.75071C6.00747 9.75071 7.04817 9.36631 7.87558 8.71939V9.10145C7.87558 9.25146 7.93417 9.39444 8.03965 9.49991L10.3765 11.8368C10.5969 12.0571 10.9531 12.0571 11.1711 11.8368L11.8345 11.1735C12.0548 10.9531 12.0548 10.5969 11.8368 10.3765ZM4.87536 7.87558C3.2182 7.87558 1.87514 6.53485 1.87514 4.87536C1.87514 3.2182 3.21586 1.87514 4.87536 1.87514C6.53251 1.87514 7.87558 3.21586 7.87558 4.87536C7.87558 6.53251 6.53485 7.87558 4.87536 7.87558Z"
          fill="#495057"
          fillOpacity="0.5"
        />
      </svg>
    </section>
  </nav>
);

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
