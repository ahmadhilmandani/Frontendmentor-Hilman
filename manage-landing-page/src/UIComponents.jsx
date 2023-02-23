import React from "react";
import "./App.css";

export const ButtonComponent1 = ({
  href,
  bgColor = "bg-bright-red",
  shadow = "shadow-lg",
  shadowColor = "shadow-bright-red/50",
  text,
  textColor = "text-white",
  other = "",
}) => {
  return (
    <a
      href={href}
      className={
        "px-6 py-3 text-white rounded-full text-base hover:opacity-70 font-semibold " +
        bgColor +
        " " +
        shadow +
        " " +
        shadowColor +
        " " +
        textColor +
        " " +
        other
      }
    >
      {text}
    </a>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src="/logo.svg" alt="manage logo" className="object-cover" />
      </div>

      <ul className="lg:flex hidden text-dark-blue">
        <li>
          <a
            href="#pricing"
            className="text-dark-blue hover:opacity-50 hover:text-dark-blue mr-6"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#produk"
            className="text-dark-blue hover:opacity-50 hover:text-dark-blue mr-6"
          >
            Produk
          </a>
        </li>
        <li>
          <a
            href="#about us"
            className="text-dark-blue hover:opacity-50 hover:text-dark-blue mr-6"
          >
            About us
          </a>
        </li>
        <li>
          <a
            href="#careers"
            className="text-dark-blue hover:opacity-50 hover:text-dark-blue mr-6"
          >
            careers
          </a>
        </li>
        <li>
          <a
            href="#comunity"
            className="text-dark-blue hover:opacity-50 hover:text-dark-blue mr-6"
          >
            Comunity
          </a>
        </li>
      </ul>

      <div className="lg:block hidden">
        <ButtonComponent1 href="#get-started" text="Get Started" />
      </div>

      <div className="lg:hidden block">
        {/* <span className="border"> */}
        <img src="/icon-hamburger.svg" alt="" />
        {/* </span> */}
      </div>
    </nav>
  );
};
