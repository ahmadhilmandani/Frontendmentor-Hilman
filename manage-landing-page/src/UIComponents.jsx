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
    <a href={href} className=
      {
        "px-6 py-3 rounded-full text-base hover:opacity-70 font-semibold " +
        bgColor + " " +
        shadow + " " +
        shadowColor + " " +
        textColor + " " +
        other
      }
    >
      {text}
    </a>
  );
};


export const Card = (props) => {
  return (
    <div className="w-full md:max-w-[480px] flex flex-col items-center shrink-0">
      <div className="w-[60px] h-[60px] rounded-full -mb-6 z-10 object-cover bg-violet-500 back" style={{ backgroundImage: "url(./" + props.src + ")", backgroundSize: 'cover' }}>
      </div>
      <div className="text-center bg-very-light-gray px-4 py-10">
        <h2 className="content-around">{props.name}</h2>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}


export const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
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
        <img src="/icon-hamburger.svg" alt="" />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (

    <footer>

      <div className="bg-bright-red lg:flex lg:justify-between items-center px-5 py-16">
        <h1 className="text-white text-center text-3xl leading-normal mb-12 lg:mb-0">
          Simplify how your team works today.
        </h1>
        <div className="w-fit mx-auto lg:mx-0">
          <ButtonComponent1 href={'#get-started'} text={'Get Started'} bgColor={'bg-white'} shadow='' shadowColor='' textColor={"text-bright-red"} />
        </div>
      </div>

      <div className="bg-very-dark-blue px-5 py-16 lg:flex lg:flex-row-reverse lg:justify-between">
        <form action="" className="flex flex-col justify-between bg-zinc-100">
          <div className="flex items-start">
            <input type="text" className="grow rounded-full px-5 py-3 bg-white text-very-light-gray lg:mr-4 md:mr-8 mr-3" placeholder="Updates in your inbox…" />
            <button type="submit" className="basis-24 grow-0 shrink px-5 py-3 text-white rounded-full text-base hover:opacity-70 font-semibold bg-bright-red">Go</button>
          </div>
          <div className="hidden lg:block text-right">Copyright 2020. All Rights Reserved</div>
        </form>
        <div className="flex justify-between lg:p-0 p-8 bg-red-100">
          <ul className="lg:mr-12">
            <a href=""><li className="text-white mb-4">Home</li></a>
            <a href=""><li className="text-white mb-4">Pricing</li></a>
            <a href=""><li className="text-white mb-4">Products</li></a>
            <a href=""><li className="text-white">About Us</li></a>
          </ul>

          <ul>
            <a href=""><li className="text-white mb-4">Careers</li></a>
            <a href=""><li className="text-white mb-4">Community</li></a>
            <a href=""><li className="text-white">Privacy Policy</li></a>
          </ul>
        </div>
        <div className="flex lg:flex-col flex-col-reverse lg:justify-between bg-amber-100">
          <div className="w-fit mx-auto mt-8 lg:m-0">
            <img src="/logo-white.svg" alt="manage logo" className="object-cover" />
          </div>
          <div className="flex justify-around">
            <a href="#facebook"><img src="./icon-facebook.svg" alt="" className="w-[24px] lg:w-[20px]" /></a>
            <a href="#youtube"><img src="./icon-youtube.svg" alt="" className="w-[24px] lg:w-[20px]" /></a>
            <a href="#twitter"><img src="./icon-twitter.svg" alt="" className="w-[24px] lg:w-[20px]" /></a>
            <a href="#pinterest"><img src="./icon-pinterest.svg" alt="" className="w-[24px] lg:w-[20px]" /></a>
            <a href="#instagram"><img src="./icon-instagram.svg" alt="" className="w-[24px] lg:w-[20px]" /></a>
          </div>
        </div>
      </div>

      <div className="bg-very-dark-blue pb-4">
        <p className="text-center lg:text-right lg:hidden block">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>

  )
}
