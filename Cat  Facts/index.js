const button = document.getElementById("fact-button");
const factBox = document.getElementById("fact-box");
let facts = [];
let index = 0;
async function fetchFacts() {
  const response = await fetch("https://catfact.ninja/facts");
  const data = await response.json();
  facts = data.data.map((fact) => fact.fact).slice(0, 15); // Limit to 15 facts
}

fetchFacts();

button.addEventListener("click", () => {
  if (index < facts.length) {
    factBox.textContent = facts[index];
    index++;
  } else {
    factBox.textContent =
      "You have reached the end of the cat facts! Press the button to start over.";
    button.textContent = "Restart";
    button.addEventListener(
      "click",
      () => {
        index = 0;
        factBox.textContent = "Click the button to see a cat fact!";
        button.textContent = "Get a Cat Fact";
      },
      { once: true }
    );
  }
});
