const About = () => {
  return (
    <>
      <header>
        <h1 className="h1 font-semibold text-stone-700 tracking-tighter">
          Eco<span className="text-green-700">Breathe</span>.
        </h1>
        <h2 className="mt-4 -mb-2 h3 text-stone-600 font-thin tracking-tight">
          Your realtime air quality companion.
        </h2>
      </header>
      <p className="p font-light text-stone-600 ">
        <strong>EcoBreathe</strong> is your trusted source for real-time global
        air quality information, providing accurate hourly updates.
      </p>
      <a href="/about">
        <button className="button-style mt-4 ">Learn More</button>
      </a>
    </>
  );
};
export default About;
