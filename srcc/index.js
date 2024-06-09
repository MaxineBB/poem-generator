function displayPoem(response) {
    
    console.log("poem generated");
    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 80,
  cursor: "",
});

}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "cae984oa7de9d242032b1t958df34cd2";
    let prompt = `generate cozy themed short poem about ${instructionsInput.value}`;
    let context = "Provide sweet and short cozy poems with a bold title at the top. Make sure to separate the title and each line with a <br />";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<span class="blink">Poem about ${instructionsInput.value} is blooming quietly. 🌷</span>`;

    console.log("generating poem...");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);
    axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);