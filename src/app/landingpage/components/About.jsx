const About = () => {
  return (
    <>
      <header>
        <h1 className="h1">
          Eco<strong className="text-accent">Breathe</strong>
        </h1>
        <h2 className="mt-4 h2">Your realtime air quality companion</h2>
      </header>
      <p className="mt-4 p">
          <strong>
            Eco<span className="text-accent">Breathe</span>
          </strong>{" "}
          is your trusted source for real-time global air quality
          information, providing accurate
          hourly updates.
        </p>
        <a href ="/about">
        <button className="button-style mt-4 xl:mt-8">Learn More</button>
        </a>
    </>
  );
};
export default About;
