const spans = document.querySelectorAll("span");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const title = document.querySelector("h2");
const text = document.querySelector("p");
const img = document.querySelector("img");
const resultElement = document.querySelector("p");
let selectedSpan = null;

spans.forEach((span) => {
  span.addEventListener("click", (event) => {
    if (span === selectedSpan) {
      span.classList.remove("selected");
      selectedSpan = null;
    } else {
      if (selectedSpan) {
        selectedSpan.classList.remove("selected");
      }
      span.classList.add("selected");
      selectedSpan = span;
    }
  });
});

button.addEventListener("click", () => {
  img.setAttribute("src", "./images/illustration-thank-you.svg");
  img.classList.remove("img");
  img.style.marginInlineStart = "40px";
  img.style.marginBlockStart = "10px";
  img.style.marginBlockEnd = "10px";

  title.innerHTML = "Thank You!";
  title.style.textAlign = "center";
  title.style.marginBlockStart = "10px";

  text.innerHTML = `We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!`;
  text.style.textAlign = "center";

  if (selectedSpan) {
    const selectedValue = selectedSpan.textContent;
    const statement = `You selected ${selectedValue} out of 5`;
    resultElement.textContent = statement;
    resultElement.style.backgroundColor = "hsl(213, 7%, 24%)";
  } else {
    resultElement.textContent = "No option selected.";
  }

  spans.forEach((span) => {
    span.style.display = "none";
  });

  button.style.display = "none";
});
