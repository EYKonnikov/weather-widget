# Vue Weather Widget.

[Demo.](https://main--melodic-cobbler-f0b444.netlify.app//)



![Image](src/assets/demopic.png?raw=true "Title")

## Setup (for users).

Just <b>copy & paste</b> this code snippet into your project to use this widget!

```
<iframe
	width="680"
	height="1200"
	src="https://63dd432a8dd37f0db40df106--stunning-gelato-a21f3c.netlify.app/"
	title="Weather Widget"
	frameborder="0"
	allow="accelerometer; clipboard-write; picture-in-picture"
	allowfullscreen
></iframe>
```

<br/>

## Setup (for developers).

1. Download the repository.

2. Create `.env` file in the root folder.

3. Add two variables to `.env` file: <br/>
`VUE_APP_OPEN_WEATHER_API_KEY` - [OpenWeather API](https://openweathermap.org/api) key.<br/>
`VUE_APP_IPINFO_TOKEN` - [ipinfo](https://ipinfo.io/) token.

4. Run `npm install` from the root folder.

5.1. To launch in development mode, run `npm run serve`.

5.2. To build for production, run `npm run build`.

## About

1. Users can add this widget to their websites as simple as inserting the snippet into an HTML-page: <iframe>

3. Get data for the widget from free public API. You must register an account at OpenWeather.

4. After clicking the ‘Gear’ button at the upper-right corner, switch the view to the following:

   Here, a user can:

      a. Remove previously added cities.

      b. Reorder the cities by dragging and dropping them within the list using ‘Hamburger’ icon to the left from the city name.

      c. Add new locations.

5. Save the configuration in the local storage and restore it on future visits. A user can configure the widget just once and then have the same view until they change the computer or clean the storage.

6. By default, on initial opening, request the current user’s location and display the weather in their city.
