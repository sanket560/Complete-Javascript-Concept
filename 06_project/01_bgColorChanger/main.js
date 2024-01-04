const button = document.querySelectorAll("button");
const body = document.querySelector("body");
// console.log(button);
button.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    switch (e.target.id) {
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "orange":
        body.style.backgroundColor = e.target.id;
        break;
      case "pink":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});
