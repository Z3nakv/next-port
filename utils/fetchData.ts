
export async function fetchData() {
    
    const url = `https://gnews.io/api/v4/search?q=gaming&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}`

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        
        return result;
        
    } catch (error) {
        console.log(error);
    }
}

export const requestWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Lima,PE&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
        const result = await response.json();
        
        const { lat } = result[0];
        const { lon } = result[0];
    
        const secondRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
        const secondResponse = await secondRequest.json();
        // console.log(secondResponse);
        
        return secondResponse;
    } catch (error) {
        console.log(error);
    }
}

export function getTime () {
    const newDate = Date.now();
    const date = new Date(newDate)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    // console.log(seconds);
    
    return {hour, minutes, seconds}
}

export const transformTime = (time) => {
    const hour = time.hour.toString().padStart(2, "0");
    const minutes = time.minutes.toString().padStart(2, "0");
    const seconds = time.seconds.toString().padStart(2, "0");
    // console.log(seconds);
    
    return `${hour}:${minutes}:${seconds}`;
  };