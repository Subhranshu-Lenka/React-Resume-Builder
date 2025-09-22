import "./home.css";

function Home() {
  return (
    <>
      {/* <p>Welcome to the Home Page!</p> */}
      <section id="first-attempt" className="hero">
        <h2 className="text-5xl text-left">
          Build your&nbsp;
          <span className="italic font-bold">ATS-beating</span> <br />
          resume in minutes!
          <br />
          <p className="mt-5 italic text-lg font-medium">
            Craft a perfect resume that gets noticed by the recruiters.
          </p>
        </h2>
        <div className="hero-img"></div>
      </section>

      <section className="hero">
        <div
          className="
          max-w-full lg:max-w-[1200px] mx-auto text-center p-20
          hero-content-container
          "
        >
          <h1 className="xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl font-bold ">
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
            <button className="primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r from-cyan-700 to-cyan-400">
              Start Building
            </button>
            <button className="primary text-lg font-bold px-7 py-3 border-2 border-white-300 rounded-3xl bg-transparent">
              View Templates
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
