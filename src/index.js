// write your code here
// Make a GET request to the server to get all the ramen objects
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    // Display the image for each of the ramen using an img tag inside the #ramen-menu div
    const ramenMenuDiv = document.querySelector("#ramen-menu");
    ramens.forEach((ramen) => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener("click", () => {
        // When an image is clicked, display all the info about that ramen in the #ramen-detail div
        const ramenDetailDiv = document.querySelector("#ramen-detail");
        ramenDetailDiv.querySelector(".detail-image").src = ramen.image;
        ramenDetailDiv.querySelector(".name").textContent = ramen.name;
        ramenDetailDiv.querySelector(".restaurant").textContent =
          ramen.restaurant;
        document.querySelector("#rating-display").textContent = ramen.rating;
        document.querySelector("#comment-display").textContent = ramen.comment;
      });
      ramenMenuDiv.appendChild(img);
    });
  });

// Create a new ramen after submitting the new-ramen form
const newRamenForm = document.querySelector("#new-ramen");
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;

  const ramen = {
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment,
  };

  // Add the new ramen to the #ramen-menu div
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.addEventListener("click", () => {
    const ramenDetailDiv = document.querySelector("#ramen-detail");
    ramenDetailDiv.querySelector(".detail-image").src = image;
    ramenDetailDiv.querySelector(".name").textContent = name;
    ramenDetailDiv.querySelector(".restaurant").textContent = restaurant;
    document.querySelector("#rating-display").textContent = rating;
    document.querySelector("#comment-display").textContent = comment;
  });
  document.querySelector("#ramen-menu").appendChild(img);

  // Reset the form
  newRamenForm.reset();
});
