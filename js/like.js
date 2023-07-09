const likeButtons = document.querySelectorAll(".like-button");
const visitorId = getVisitorId();

let isLiked = {};

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isLiked[button.id]) {
      counter.textContent++;
      isLiked[button.id] = true;
      console.log("like!");
    }
  });
});

function getVisitorId() {
  // Get the visitor's unique ID.
  // This could be a cookie, a session ID, or anything else that uniquely identifies the visitor.
  return "1234567890";
}