import { printCurrentYear, printLastModified, spinnerShow } from "./Util.mjs";

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
    select.appendChild(new Option(product.name, product.id +" - " + product.name.toUpperCase()));
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
