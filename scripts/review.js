import { printCurrentYear, printLastModified, spinnerShow } from "./Util.mjs";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    spinnerShow(false); // Hide spinner after 1 second
  }, 1000); // Simulate processing delay
});
const getStars = (rating) => {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating); // Create a string of stars
  return stars; // Return the stars string
};
function formatDateToMMMDDYYYY(dateString) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short", // MMM (abreviatura del mes)
    day: "numeric", // DD
    year: "numeric", // YYYY
  }).format(date);
}

const renderReviewCard = (productReview = null) => {
  if (productReview) {
    return /*html*/ `
      <div class="card col-grid-3-center">
          <h2 class="title">Product Review</h2>
          <div class="body">
              <p>
                <b>Product Name:</b> 
                ${productReview.productName}
              </p>
              <p>
                <b>Overall Rating:</b> 
                ${getStars(productReview.productRating)}
              </p>
              <p>
                <b>Date of installation:</b>
                ${formatDateToMMMDDYYYY(productReview.dateInstallation)}
              </p>
                <ul>
                    <li><b>Features Selected:</b></li>
                    ${
                      productReview.features.length > 0
                        ? productReview.features
                            .map((feature) => `<li>${feature}</li>`)
                            .join("")
                        : `<li>No Features Selected</li>`
                    }
                   
                </ul>	
              <p>
              <b>Written Review:</b>${
                productReview.writtenReview
                  ? productReview.writtenReview
                  : `No Product Review`
              }</p>
              <p>
              <b>Name:</b>${
                productReview.userName
                  ? productReview.userName
                  : `No User Name Provided`
              }
              </p>
         </div>
         `;
  } else {
    return /*html*/ `
      <div class="card col-grid-3-center">
          <h2 class="title">Product Review</h2>
          <div class="body">
              <p>No review data found.</p>
         </div>
         `;
  }
};
const renderReview = () => {
  const reviewContainer = document.querySelector("main");
  const reviewData = JSON.parse(localStorage.getItem("productReview"));
  reviewContainer.innerHTML = renderReviewCard(reviewData);
};

renderReview();
spinnerShow(true); // Show spinner
printCurrentYear("currentyear");
printLastModified("lastModified");
