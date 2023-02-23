import React from "react";
import { ButtonComponent1, Navbar } from "./UIComponents";
import "./App.css";

function App() {
  return (
    <div className="m-auto h-full lg:w-11/12 ">

      <Navbar />

      <section className="mt-8 w-full lg:flex lg:justify-between lg:flex-row-reverse lg:items-center ">
        <img src="./illustration-intro.svg" alt="" className="m-auto lg:w-6/12 lg:mr-4" />
        <div className="text-center lg:mt-0 lg:pr-8 mt-2 lg:text-left">
          <h1 className="font-semibold text-dark-blue text-4xl md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="my-14 w-full text-dark-grayish-blue text-sm md:text-base lg:w-8/12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <ButtonComponent1 text="Get Started" href="#get-started" />
        </div>
        <img src="./bg-tablet-pattern.svg" alt="Tablet Pattern" className="absolute -top-28 -right-36 -z-50 block scale-125 lg:-top-52 lg:scale-105" />
      </section>

      <section className="mt-20 min-h-screen lg:flex lg:justify-between">
        <div className="text-center lg:text-left lg:w-5/12">
          <h1 className="font-semibold text-dark-blue text-2xl md:text-4xl">
            What’s different about Manage?
          </h1>
          <p className="text-dark-grayish-blue mt-8 text-sm md:text-base">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-5/12">
          <div>
            <h2 className="bg-very-pale-red rounded-l-full mx-auto w-screen lg:p-0 py-3 lg:bg-transparent">
              <ButtonComponent1 href={""} text="01" shadow="" shadowColor="" other="hover:opacity-100" />
              <span className="ml-2 font-semibold text-dark-blue text-sm md:text-base">
                Track company-wide progress
              </span>
            </h2>
            <p className="text-dark-grayish-blue mt-6 text-sm md:text-base">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="lg:p-0 py-3 lg:bg-transparent bg-very-pale-red rounded-l-full mx-auto w-screen">
              <ButtonComponent1 href={""} text="02" shadow="" shadowColor="" other="hover:opacity-100" />
              <span className="ml-2 font-semibold text-dark-blue text-sm md:text-base">
                Advanced built-in reports
              </span>
            </h2>
            <p className="text-dark-grayish-blue mt-6 text-sm md:text-base">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="lg:p-0 py-3 lg:bg-transparent bg-very-pale-red rounded-l-full mx-auto w-screen">
              <ButtonComponent1 href={""} text="03" shadow="" shadowColor="" other="hover:opacity-100" />
              <span className="ml-2 font-semibold text-dark-blue text-sm md:text-base">
                Everything you need in one place
              </span>
            </h2>
            <p className="text-dark-grayish-blue mt-6 text-sm md:text-base">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>

        <img src="./bg-tablet-pattern.svg" alt="Tablet Pattern" className="absolute lg:top-[1000px] top-[560px] md:-right-96 md:scale-50 -right-64 -z-50 block lg:scale-100 scale-90 lg:-left-96" />
      </section>
    </div>
  );
}

export default App;
