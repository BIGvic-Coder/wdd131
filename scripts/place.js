// Set current year and last modified date in footer
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Static weather values (replace later with API)
const temperature = 45; // in °F
const windSpeed = 5; // in mph

// Calculate wind chill using standard formula
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Display wind chill if valid, else show N/A
const windChillElement = document.querySelector(".weather p:last-child");
if (temperature <= 50 && windSpeed > 3) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `Wind Chill: ${windChill}°F`;
} else {
  windChillElement.textContent = "Wind Chill: N/A";
}
