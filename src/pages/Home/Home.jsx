import "./home.css";

function Home() {
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
            <button className="primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl bg-linear-to-r from-cyan-700 to-cyan-400">
              Start Building Now
            </button>
            <button className="primary text-lg font-bold px-7 py-3 border-2 border-white-300 rounded-3xl bg-transparent">
              View Templates
            </button>
          </div>
        </div>
      </section>

      <main className="main-content mt-[4%] bg-gray-700">
        <section id="templates" className="templates-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="font-bold text-5xl">Professional Resume Templates</h2>
              <p className="text-lg py-[2%]">Choose from our collection of modern, ATS-optimized templates <br /> designed by industry experts</p>
            </div>

            <div className="templates-grid">

            </div>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}

export default Home;
