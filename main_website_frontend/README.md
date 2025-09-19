# WeatherWise Events – React Frontend

A modern, mobile‑first website that integrates real-time weather data to help clients plan events with confidence.

## Features

- Real-time weather via OpenWeatherMap (geocoding + 5-day/3-hour forecast)
- Weather-based event suitability indicators
- Interactive planning tools
- Event booking form (integrates with event_data_db REST endpoints)
- Informational pages: Home, Plan, Services, Contact
- Ocean Professional theme using Tailwind CSS

## Quickstart

1) Install dependencies
```
npm install
```

2) Set environment variables (create `.env` in project root):
```
REACT_APP_OPENWEATHER_API_KEY=YOUR_OPENWEATHERMAP_KEY
```

3) Run development server
```
npm start
```

4) Production build
```
npm run build
```

Note: Tailwind CSS is preconfigured. The build step runs `npm run build:css` automatically.

## API Integration

- Weather: OpenWeatherMap Geocoding + Forecast APIs.
  - Requires `REACT_APP_OPENWEATHER_API_KEY` in environment.
- Event booking/contact: This frontend posts to `/api/events/book` and `/api/contact`. Point these to your event_data_db service via proxy or gateway.

## Tech

- React 18, React Router v6
- SWR for lightweight data fetching
- Tailwind CSS for styling

## Style Guide

- Theme: Ocean Professional
- Colors: Primary #2563EB, Secondary/Success #F59E0B, Error #EF4444
- Background: #f9fafb, Surface: #ffffff, Text: #111827
- Layout: Clean, minimalist, responsive, subtle shadows, rounded corners, custom weather icons

## Project Structure

- `src/components`: UI building blocks (Navbar, Footer, WeatherIcon, ForecastGrid, Planner, BookingForm)
- `src/pages`: Route pages (Home, Plan, Services, Contact)
- `src/services`: Data hooks (useWeather)
- `src/styles/tailwind.css`: Tailwind and theme definitions

