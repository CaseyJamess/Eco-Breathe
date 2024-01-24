const SignUpInfo = () => {

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
    <div className="">
      {info.map((item) => (
        <ul key={item.id} className="list-disc p list-inside">
          <li className="">
            <strong className="accent">{item.title}</strong>
            {item.info}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SignUpInfo;
