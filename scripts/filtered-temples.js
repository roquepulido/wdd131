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
    templeName: "Mexico City Benemérito Mexico",
    location: "Mexico City, Mexico",
    dedicated: "announced",
    area: 29000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-benemerito-mexico-temple/mexico-city-benemerito-mexico-temple-56024-main.jpg",
  },
  {
    templeName: "Puebla Mexico Temple",
    location: "Puebla, Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: 35865,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg",
  },
  {
    templeName: "Mérida Mexico Temple",
    location: "Mérida, Yucatán, México",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg",
  },
];

const templeCardTemplate = (title, location, dedicated, area, imageUrl) => {
  return /*html*/`
<div class="temple-card">
  <h3>${title}</h3>
  <p><span>Location:</span>${location}</p>
  <p><span>Dedicated:</span> ${dedicated}</p>
  <p><span>Area:</span>${Number(area).toLocaleString("en-US")} sq ft</p>
  <figure>
    <img src="${imageUrl}" alt="${title} Temple" loading="lazy" />
    <figcaption>${title}</figcaption>
  </figure>
</div>`;
}

const renderTemples = (templeList,querySelectorContainer) => {
  debugger;
  const templesContainer = document.querySelector(querySelectorContainer);
  // Clear the container before rendering new temples
  templesContainer.innerHTML = ""; // Clear the container
  templesContainer.innerHTML = templeList
    .map((temple) => {
      return templeCardTemplate(
        temple.templeName,
        temple.location,
        temple.dedicated,
        temple.area,
        temple.imageUrl
      );
    })
    .join("");
}

const filterTemples = (criteria = null) => {
  debugger;
  let filteredTemples = temples;

  switch (criteria) {
    case "old": // Filter temples built before 1900
      return temples.filter((temple) => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() < 1900;
      });
    case "new": // Filter temples built after 2000
      return temples.filter((temple) => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() > 2000;
      });
    case "large": // temples larger than 90,000 square feet
      return (filteredTemples = temples.filter(
        (temple) => temple.area > 90000
      ));

    case "small": // temples smaller than 10,000 square feet
      return (filteredTemples = temples.filter(
        (temple) => temple.area < 10000
      ));
    default: // No filter applied
      return temples;
  }
}

document.querySelector("#home").addEventListener("click", (e) => {
  renderTemples(filterTemples(), ".templesContainer");
});
document.querySelector("#old").addEventListener("click", () => {
  renderTemples(filterTemples("old"), ".templesContainer");
});
document.querySelector("#new").addEventListener("click", () => {
  renderTemples(filterTemples("new"), ".templesContainer");
});
document.querySelector("#large").addEventListener("click", () => {
  renderTemples(filterTemples("large"), ".templesContainer");
});
document.querySelector("#small").addEventListener("click", () => {
  renderTemples(filterTemples("small"), ".templesContainer");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
/**
 * This script is used to get the current year and the last modified date of the page.
 */
function printCurrentYear() {
  const today = new Date();

  document.getElementById("currentyear").innerHTML = today.getFullYear();
}

/**
 * This function prints the last modified date of the page.
 */
function printLastModified() {
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

  document.getElementById("lastModified").innerHTML = lastModified;
}

// Call the functions on load
printCurrentYear();
printLastModified();
renderTemples(filterTemples(), ".templesContainer");

