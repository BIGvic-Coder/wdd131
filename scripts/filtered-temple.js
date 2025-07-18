// Footer Year & Last Modified Date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector(
  "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "./images/accra im.jpg",
  },

  ,
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "./images/rome italy.jpg",
  },

  ,
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "./images/salt lake temple.jpg",
  },
];

// Render Function
const displayTemples = (templesToShow) => {
  const container = document.querySelector(".temple-grid");
  container.innerHTML = "";

  templesToShow.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      <em>Location:</em> ${temple.location}<br>
      <em>Dedicated:</em> ${temple.dedicated}<br>
      <em>Size:</em> ${temple.area.toLocaleString()} sq ft
    `;

    card.appendChild(img);
    card.appendChild(caption);
    container.appendChild(card);
  });
};

// Filter Logic
const filterTemples = (filter) => {
  let filtered = temples;

  switch (filter) {
    case "Old":
      filtered = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) < 1900
      );
      break;
    case "New":
      filtered = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) > 2000
      );
      break;
    case "Large":
      filtered = temples.filter((t) => t.area > 90000);
      break;
    case "Small":
      filtered = temples.filter((t) => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
};

// Add Event Listeners
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(link.textContent.trim());
  });
});

// Display all temples on initial load
displayTemples(temples);
