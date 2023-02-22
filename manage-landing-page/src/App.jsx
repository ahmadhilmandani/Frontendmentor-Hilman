import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const ButtonComponent1 = (props) => {
  return props.flagColor ? (
    <a
      href={props.href}
      className="px-7 py-4 bg-bright-red text-white rounded-full hover:opacity-70 hover:text-white shadow-lg shadow-bright-red/50"
    >
      {props.text}
    </a>
  ) : (
    <a
      href={props.href}
      className="px-7 py-4 bg-white text-bright-red rounded-full hover:opacity-70 hover:text-bright-red shadow-lg"
    >
      {props.text}
    </a>
  );
};

const Navbar = () => {
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
        <ButtonComponent1
          flagColor={true}
          href="#get-started"
          text="Get Started"
        />
      </div>

      <div className="lg:hidden block">
        {/* <span className="border"> */}
        <img src="/icon-hamburger.svg" alt="" />
        {/* </span> */}
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className=" lg:w-11/12 m-auto">
      <Navbar />
      <section className="lg:flex lg:justify-between lg:flex-row-reverse lg:items-center lg:mt-0 mt-8 w-full min-h-screen">
        <img
          src="/illustration-intro.svg"
          alt=""
          className="m-auto lg:w-6/12 lg:mr-4"
        />
        <div className="lg:mt-0 lg:pr-8 mt-2 lg:text-left text-center">
          <h1 className="font-semibold text-dark-blue">
            Bring everyone together to build better products.
          </h1>
          <p className="lg:w-8/12 my-16 w-full text-dark-grayish-blue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <ButtonComponent1
            flagColor={true}
            text="Get Started"
            href="#get-started"
          />
        </div>
        <img
          src="/bg-tablet-pattern.svg"
          alt="Tablet Pattern"
          className="absolute lg:-top-52 -top-28 -right-36 -z-50 block lg:scale-105 scale-125"
        />
      </section>
    </div>
  );
}

export default App;
