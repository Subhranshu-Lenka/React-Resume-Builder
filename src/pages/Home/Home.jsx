import { useRef } from "react";
import useScrollToView from "../../hooks/useScrollToView";
import TemplateCard from "../../components/Cards/TemplateCard";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import "./home.css";

function Home() {
  const templateRef = useRef();
  const [templateRefe, scrollToTemplate] = useScrollToView();
  return (
    <>
      <section className="hero">
        <div
          className="
          max-w-full lg:max-w-[1200px] mx-auto text-center pt-[6%] pb-[3%]
          hero-content-container
          "
        >
          <h1 className="xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl font-bold py-[3%]">
            Build Your Dream Resume in Minutes!
          </h1>
          <p
            className="
            my-8 italic text-lg font-medium md:text-xl
            hero-subtitle
            "
          >
            Choose from expertly designed ATS-friendly templates and land your
            dream job faster.
            <br />
            <span className="font-light">Stand Out, &nbsp;</span>
            <span className="font-bold">Get Hired!</span>
          </p>
          <div
            className="hero-cta
            flex justify-center gap-10 relative top-4
            "
          >
            {/* <button className="primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r from-cyan-700 to-cyan-400">
              Start Building Now
            </button> */}
            <PrimaryBtn btnLabel="Start Building Now" />
            <button
              className="primary text-lg font-bold px-7 py-3 border-2 border-white-300 rounded-3xl bg-transparent"
              // onClick={() => {
              //   templateRef.current?.scrollIntoView({ behaviour: "auto" });
              // }}
              onClick={scrollToTemplate}
            >
              View Templates
            </button>
          </div>
        </div>
      </section>

      <main className="main-content mt-[4%] bg-gray-900">
        <section
          id="templates"
          className="
          flex justify-center 
          bg-gradient-to-b from-transparent to-black/30
          templates-preview 
          "
          ref={templateRefe}
        >
          <div className="container">
            <div className="section-header">
              <h2 className="font-bold text-5xl text-slate-500">
                Professional Resume Templates
              </h2>

              <p className="text-lg py-[2%]">
                Choose from our collection of modern,{" "}
                <strong>ATS-optimized</strong> templates <br /> designed by
                industry experts
              </p>
            </div>

            <div
              className="
              grid grid-cols-3 gap-1 place-items-center py-3 mb-[3%]
              templates-grid
              "
            >
              <TemplateCard cardTitle="Modern Professional" />
              <TemplateCard cardTitle="Creative Designer" />
              <TemplateCard cardTitle="Executive Elite" />
            </div>

            <PrimaryBtn btnLabel="View All Templates" />
          </div>
        </section>

        <section className="why-choose-us">
          <div className="container">
            <div className="section-header">
              <h2 className="font-bold text-5xl text-slate-500">
                Why Build Your CV With Us?
              </h2>

              <p className="text-lg py-[2%]">
                We make resume building effortless with powerful features and professional results
              </p>
            </div>
            <div className="grid"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
