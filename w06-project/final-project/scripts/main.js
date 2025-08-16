// ✅ Update year automatically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Update last modified date
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${document.lastModified}`;

// ✅ Dark/Light mode toggle with localStorage
const toggleBtn = document.getElementById("modeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const mode = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", mode);
  });

  // Load saved theme on refresh
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
  }
}

// ✅ Recipe data array (with images)
const recipes = [
  {
    name: "Jollof Rice",
    origin: "West Africa",
    difficulty: "Medium",
    image: "images/jollof.jpg",
  },
  {
    name: "Spagetti Carbonara",
    origin: "Italy",
    difficulty: "Easy",
    image: "images/spagetti.jpg",
  },
  {
    name: "Chicken Soup",
    origin: "Global",
    difficulty: "Easy",
    image: "images/chicken.jpg",
  },
];

// ✅ Render recipes dynamically
function renderRecipes(filter = "all") {
  const recipesList = document.getElementById("recipesList");
  if (!recipesList) return;

  const filteredRecipes =
    filter === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.difficulty === filter);

  recipesList.innerHTML = filteredRecipes
    .map(
      (recipe) => `
    <article class="card">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
      <h3>${recipe.name}</h3>
      <p><strong>Origin:</strong> ${recipe.origin}</p>
      <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
    </article>
  `
    )
    .join("");
}

// ✅ Initial render
renderRecipes();

// ✅ Filter recipes by difficulty
const filterDropdown = document.getElementById("difficultyFilter");
if (filterDropdown) {
  filterDropdown.addEventListener("change", (e) => {
    renderRecipes(e.target.value);
  });
}
