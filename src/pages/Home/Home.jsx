import "./home.css";

function Home() {
  return (
    <div>
      {/* <p>Welcome to the Home Page!</p> */}
      <section className="hero">
        <h2
          className="text-5xl text-left"
        >
          Build your&nbsp;
          <span
            className="italic font-bold">
            ATS-beating
          </span> <br />
          resume in minutes!
          <br />
          <p
            className="mt-5 italic text-lg font-medium">
            Craft a perfect resume that gets noticed by the recruiters.
          </p>
        </h2>
        <div className="hero-img"></div>
      </section>
    </div>
  );
}

export default Home;
