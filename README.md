# Air Active - Real Time Air Quality Monitoring! 🌎💨🏃

Welcome to Air Active!

This repo is the front-end of a full-stack web application designed for the health-conscious and environmentally aware.

Leveraging real-time air quality data from across the globe, our application aids users in determining the ideal times to engage in outdoor activities, ensuring that you're breathing only the best whilst getting fit.

## Overview 🌐

The deteriorating quality of air in various parts of the world has raised genuine health concerns.  
Air Active seeks to empower individuals with actionable insights about air quality, enabling them to plan their outdoor workouts and activities at times when the air is at its best.  

## Latest Release

Version 0.2.0 - 17/01/24

Author: Casey Jamess

  - Implemented a secure client-side API key, leveraging the Open Weather API, to provide users with real-time updates on Air Quality.

  - Enhanced code maintainability by organizing all AXIOS requests into the /services folder, promoting a more modular codebase.

## Features To Come - Feel free to suggest/add!

- Personalized Recommendations: Based on your location and the current AQI, get suggestions on the best times for outdoor activities.
- User Profiles: Save preferences, track activity patterns, add any comments, and get customised alerts.
- UI/UX Update

## Tech Stack

### Languages: 

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Ruby](https://img.shields.io/badge/-Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)

![React (Next.js)](https://img.shields.io/badge/-React%20(Next.js)-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![Rails](https://img.shields.io/badge/-Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)



APIs:

- Mapbox API for Geolocating user input queries - [Mapbox Documentation](https://docs.mapbox.com/api/overview/)

- Incorporated client-side requests for the Air Quality API, enhancing the application's responsiveness by directly fetching and updating air quality data on the user's device - [OpenWeatherAPI] (https://api.openweathermap.org/data/2.5/)


## Features 🌟

Global Air Quality Index (AQI) Dashboard: Access real-time air quality metrics from cities around the world.

This is the V0.2.0 UI & Landing Page layout in light mode:  

![Light Mode](https://user-images.githubusercontent.com/19407258/266426752-0bd244e3-4a0e-456d-bd34-2d0ee0c00446.png)

Dark Mode:

![Light Mode](https://user-images.githubusercontent.com/19407258/266426769-5a289324-5033-43ce-a845-30704c815b8d.png)


## Getting Started 🚀

Get API Keys:

Before running the application, you'll need to obtain API keys for Mapbox and OpenWeather. Follow these steps:

    Mapbox API Key:
        Visit Mapbox and sign up for an account.
        Create a new access token in your Mapbox account.
        Copy the access token.

    OpenWeather API Key:
        Go to OpenWeatherMap and sign up for an account.
        Obtain your API key from the OpenWeatherMap website.

Configure API Keys:

    Create a .env file in the root of the project.

    Open the .env file and add the following lines:

```bash
NEXT_PUBLIC_MAPBOX_API_KEY = {your_mapbox_api_key}
NEXT_PUBLIC_OPEN_AQ = {your_openweather_api_key}
```

Replace your_mapbox_api_key and your_openweather_api_key with your actual Mapbox and OpenWeather API keys.

Note: Since the .env file is listed in the project's .gitignore, it won't be tracked by version control, ensuring that users can keep their API keys secure.

**Clone the Repository:**

```bash
# Clone the Repository
git clone https://github.com/CaseyJamess/AirActive

# Install Dependencies
npm install

# Run the Application
npm run dev
```

## Contributing and Issues 🤝  

Contributions are welcome along with feedback, and suggestions. Feel free to open an issue or submit a pull request.  
If you found any bugs or would like to see new features, please let me know!


### Connect with me on LinkedIn! 

https://www.linkedin.com/in/casey-mcardle/

### License 📜
This project is licensed under the MIT License. See the LICENSE file for details.


