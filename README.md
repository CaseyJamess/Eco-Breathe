# EcoBreathe - Real Time Air Quality Monitoring! 🌎


Welcome to EcoBreathe!

This repo is the front-end of a full-stack web application designed for the health-conscious and environmentally aware.

Leveraging real-time air quality data from across the globe, EcoBreathe aids users in determining the ideal times to engage in outdoor activities, ensuring that you're breathing only the best whilst getting fit.


## Overview 🌐

The deteriorating quality of air in various parts of the world has raised genuine health concerns.  
EcoBreathe seeks to empower individuals with actionable insights about air quality and the wider environment.

## Features 🌟

Global Air Quality Index (AQI) Dashboard: Access real-time air quality metrics from cities around the world.


## Latest Release

Version 0.3.1 - 24/01/24

Author: Casey James

### Next Update / Updates to come

- UI/UX updates in displaying AQ Data

- Precise error handling for exceeding API rate limits

- Server side integration, user end points & building the user profile area.


### Additions

- Added HTTPS to OpenWeatherMap API endpoint

### Bugs to address

- None at the minute - find some! 

## Features To Come - Feel free to suggest/add!

- Personalized Recommendations: Based on your location and the current AQI, get suggestions on the best times for outdoor activities.
- User Profiles: Save preferences, track activity patterns, add any comments, and get customised alerts.

## Tech Stack

### Languages: 

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![React (Next.js)](https://img.shields.io/badge/-React%20(Next.js)-61DAFB?style=for-the-badge&logo=react&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Ruby](https://img.shields.io/badge/-Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)![Rails](https://img.shields.io/badge/-Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)


The client side is a React App utilising the Next.JS framework, with the server-side leveraging the power of Ruby on Rails' API.

EcoBreathe is styled with Tailwind to aid in rapid app development

APIs:

- Mapbox API for Geolocating user input queries - [Mapbox Documentation](https://docs.mapbox.com/api/overview/)

- Incorporated client-side requests for the Air Quality API, enhancing the application's responsiveness by directly fetching and updating air quality data on the user's device - [OpenWeatherAPI] (https://api.openweathermap.org/data/2.5/)


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


### Connect with me on Socials! 

- https://www.linkedin.com/in/casey-mcardle/

- https://twitter.com/Casey_Jamess

### License 📜
This project is licensed under the MIT License. See the LICENSE file for details.


