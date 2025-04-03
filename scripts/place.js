const windSpeed = 10; 
const temperature = 30;
const units = 'metric';

const calculateWindChill = (temperature, windSpeed, units = 'imperial') => {
    if (units === 'imperial') {
        if (temperature > 50 || windSpeed <= 3) {
            return null;
        }
    } else if (units === 'metric') {
        if (temperature > 10 || windSpeed <= 4.8) {
            return null;
        }
    }
    let windChill;
    
    if (units === 'imperial') {
        windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) 
                    + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else{
        const tempF = (temperature * 9/5) + 32;
        const windSpeedMph = windSpeed / 1.60934;
        
        const windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeedMph, 0.16)) 
                         + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
        
        windChill = (windChillF - 32) * 5/9;
    }

    return Math.round(windChill * 10) / 10;
};

const windChill = calculateWindChill(temperature, windSpeed, units);
if (windChill !== null) {
    document.querySelector('#windChillData').textContent = `${windChill}°${units === 'imperial' ? 'F' : 'C'}`;
}else{
    document.querySelector('#windChillData').textContent = 'N/A';
}