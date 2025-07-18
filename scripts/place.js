document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Footer date info
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Static weather values
const temperature = 45; // °F
const windSpeed = 5; // mph

// Wind chill formula (only for Fahrenheit)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Display wind chill
const windChillPara = document.querySelector(".weather p:last-child");
if (temperature <= 50 && windSpeed > 3) {
  windChillPara.textContent = `Wind Chill: ${calculateWindChill(
    temperature,
    windSpeed
  )}°F`;
} else {
  windChillPara.textContent = "Wind Chill: N/A";
}
