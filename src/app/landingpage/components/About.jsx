const About = () => {
  return (
    <>
      <header>
        <h1 className="h1 font-medium tracking-tighter">
          Eco<span className="text-green-600">Breathe</span>
        </h1>
        <h2 className="mt-4 text-stone-800 tracking-tighter h3">Your realtime air quality companion.</h2>
      </header>
      <p className="mt-4 p">
        <strong>
          EcoBreathe
        </strong>{" "}
        is your trusted source for real-time global air quality information,
        providing accurate hourly updates.
      </p>
      <a href="/about">
        <button className="button-style mt-4 xl:mt-8">Learn More</button>
      </a>
    </>
  );
};
export default About;
