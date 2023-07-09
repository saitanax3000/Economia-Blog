const likeButton = document.getElementById("like-button");
const counter = document.querySelector(".counter");
const visitorId = getVisitorId();

let isLiked = false;

likeButton.addEventListener("click", () => {
  if (!isLiked) {
    counter.textContent++;
    isLiked = true;
  }
});

function getVisitorId() {
  // Get the visitor's unique ID.
  // This could be a cookie, a session ID, or anything else that uniquely identifies the visitor.
  return "1234567890";
}
