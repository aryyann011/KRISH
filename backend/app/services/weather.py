# Weather API Configuration
import requests

WEATHER_API_KEY = "bd5e378503939ddaee76f12ad7a97608"
WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"

def get_weather(city: str = None, latitude: float = None, longitude: float = None):
    """
    Fetch real weather data from OpenWeatherMap API
    
    Parameters:
    - city: str (optional) - City name to fetch weather for
    - latitude: float (optional) - GPS latitude coordinate
    - longitude: float (optional) - GPS longitude coordinate
    
    If both GPS coordinates and city are provided, GPS coordinates take precedence.
    At least one of (city) or (latitude, longitude) must be provided.
    """
    try:
        params = {
            "appid": WEATHER_API_KEY,
            "units": "metric"  # Get temperature in Celsius
        }
        
        # Use GPS coordinates if provided, otherwise use city name
        if latitude is not None and longitude is not None:
            params["lat"] = latitude
            params["lon"] = longitude
            print(f"Fetching weather for GPS coordinates: lat={latitude}, lon={longitude}")
        elif city:
            params["q"] = city
            print(f"Fetching weather for city: {city}")
        else:
            raise ValueError("Either city name or GPS coordinates (latitude, longitude) must be provided")
        
        response = requests.get(WEATHER_API_URL, params=params)
        response.raise_for_status()
        
        data = response.json()
        
        # Extract weather details
        main_data = data.get("main", {})
        rain_data = data.get("rain", {})
        clouds_data = data.get("clouds", {})
        weather_desc = data.get("weather", [{}])[0]
        
        # Calculate rainfall amount (1h in mm, if available)
        rainfall_amount = rain_data.get("1h", 0)
        
        # Use cloud percentage as a proxy for rain probability (0-100)
        # General rule: High clouds (~75%+) = higher chance of rain
        cloud_coverage = clouds_data.get("all", 0)
        rain_probability = min(cloud_coverage, 100)  # Cap at 100%
        
        return {
            "temperature": main_data.get("temp", 0),
            "feels_like": main_data.get("feels_like", 0),
            "humidity": main_data.get("humidity", 0),  # ✅ Humidity percentage (0-100)
            "rainfall": rainfall_amount,  # Rainfall in mm (if currently raining)
            "rain_probability": rain_probability,  # Cloud-based rain probability (0-100)
            "cloud_coverage": cloud_coverage,  # Cloud coverage percentage
            "weather": weather_desc.get("main", "Unknown"),  # Weather condition (Clear, Cloudy, Rainy, etc.)
            "description": weather_desc.get("description", ""),  # Detailed description
            "pressure": main_data.get("pressure", 0),  # Atmospheric pressure in hPa
            "visibility": data.get("visibility", 0),  # Visibility in meters
            "wind_speed": data.get("wind", {}).get("speed", 0),  # Wind speed in m/s
            "location": data.get("name", "Unknown")  # Location name from API
        }
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        print(f"API Key used: {WEATHER_API_KEY}")
        print(f"API URL: {WEATHER_API_URL}")
        raise
    except KeyError as e:
        print(f"Error parsing weather data: {e}")
        print(f"API Response: {data}")
        raise
