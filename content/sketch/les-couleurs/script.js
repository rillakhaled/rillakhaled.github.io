
const getColours = async () => {
  try {
    const data = await axios.get("colours.json");
    let htmlElements = document.querySelectorAll("div.couleur");
    let colourI = 0;

    // Use a regular for of loop
    for (let h of htmlElements) {
      h.style.backgroundColor = data.data[colourI].rgb;
      h.style.alpha = 0.5;
      colourI++;
    }
  }
  catch (e) {
    console.log("load error ", e);
  }
}

getColours();

/* old and clunky way of doing this using XMLHttpRequest

//load the colours file
let allColours = readTextFile("colours.json", function (text) {

  let data = JSON.parse(text);

  // Get the elements to be iterated
  let htmlElements = document.querySelectorAll("div.couleur");
  let colourI = 0;

  // Use a regular for-loop
  for (let h of htmlElements) {
    h.style.backgroundColor = data[colourI].rgb;
    h.style.alpha = 0.5;
    colourI++;
  }
}); 

function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

*/