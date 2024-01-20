// Dynamic Background render used in V0.2

/*
  const [backgroundColour, setBackgroundColour] = useState("#0d0d0d");
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const [style, setStyle] = useState({
    background: `linear-gradient(to bottom right, #0d0d0d, ${backgroundColour})`,
    backgroundColor: backgroundColour,
    transition: "background 0.5s ease",
  });


  useEffect(() => {
    // Disable the transition after it has taken effect
    if (isTransitionEnabled) {
      const timeoutId = setTimeout(() => {
        setIsTransitionEnabled(false);
      }, 1200); // Adjust the duration to match the transition duration

      return () => clearTimeout(timeoutId);
    }
  }, [isTransitionEnabled]);

  useEffect(() => {
    // Create a new object and update the background color in the style object when backgroundColour changes
    const newStyle = {
      ...style,
      background: `linear-gradient(to bottom right, #0d0d0d, ${backgroundColour})`,
      backgroundColor: backgroundColour,
    };
    // Update the style object
    setStyle(newStyle);
  }, [backgroundColour]);



   <Search
            onBackgroundColourChange={handleBackgroundColourChange}
            onAirQualityData={handleAirQualityData}
            onLocationName={handleLocationName}
          />

  */
