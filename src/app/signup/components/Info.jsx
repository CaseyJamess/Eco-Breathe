function Info() {

  const info = [
    {
      id: 0,
      title: "Real-time Air Quality Monitoring",
      info: " - Don't leave it to chance. Know what you're breathing, as it happens.",
    },
    {
      id: 1,
      title: "Health Impact Suggestions",
      info: " - Receive actionable advice tailored to current air conditions. Great for those with respiratory conditions!",
    },
    {
      id: 2,
      title: "Outdoor Activity Planner",
      info: " - Stay in the loop with alerts customised to your lifestyle and health needs.",
    },
    {
      id: 3,
      title: "Community Reports",
      info: " - Be a part of a community effort to monitor and report air quality. Your input matters!",
    },
    {
      id: 4,
      title: "Data Trends",
      info: " - Gain access to historical data and trends to better understand air quality patterns in your area.",
    },
  ];
  return (
    <article className="component">
      <h1 className="h1 mb-8 my-0 lg:my-8">
        Get started with Eco<span className="text-accent">Breathe</span>
      </h1>
      {info.map((item) => (
        <ul key={item.id} className="list-disc p list-inside">
          <li className="mb-4">
            <strong className="accent text-lg">{item.title}</strong>
            {item.info}
          </li>
        </ul>
      ))}
    </article>
  );
}

export default Info;
