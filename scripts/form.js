/**
 * This script is used to get the current year and the last modified date of the page.
 */
function printCurrentYear(id) {
  const today = new Date();

  document.getElementById(id).innerHTML = today.getFullYear();
}

/**
 * This function prints the last modified date of the page.
 */
function printLastModified(id) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const lastModified = new Date(document.lastModified).toLocaleDateString(
    "en-US",
    options
  );

  document.getElementById(id).innerHTML = lastModified;
}

/**
 * This function shows or hides a spinner element based on the active parameter.
 */
const spinnerShow = (active = true, spinnerId = "spinner") => {
  const spinner = document.getElementById(spinnerId);
  if (active) {
    spinner.style.display = "flex"; // Show spinner
  } else {
    spinner.style.display = "none"; // Hide spinner
  }
};

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
const initProducts = () => {
  const select = document.getElementById("productName");

  // Create a new option for each product and add it to the select element
  products.forEach((product) => {
    select.appendChild(
      new Option(product.name, product.id + " - " + product.name.toUpperCase())
    );
  });
};
const init = () => {
  initProducts();
  printCurrentYear("currentyear");
  printLastModified("lastModified");
};

document
  .getElementById("productReviewForm")
  .addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    spinnerShow(true); // Show spinner
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.features = Array.from(
      document.querySelectorAll('input[name="features"]:checked')
    ).map((checkbox) => checkbox.value);

    setTimeout(() => {
      localStorage.setItem("productReview", JSON.stringify(data));
      spinnerShow(false); // Hide spinner
      location.href = "review.html";
    }, 1000); // Simulate processing delay
  });
init();
