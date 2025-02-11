const wea = ( ) => {
    const api_url = "https://api.openweathermap.org/data/2.5/eather?q=london&appid="

    try {
        const response = async fetch (api_url);
        const data = await response.json();
        console.log(data)

        
    } catch (error) {
        console.log(error)
    }
}
