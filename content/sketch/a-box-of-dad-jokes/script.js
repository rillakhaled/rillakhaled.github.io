let gridContainer = document.querySelector(".grid-container");
let jokesList = new Array();
let pop = new Audio("pop.mp3");

generateColNum = function(offset) {
  let remainder = 255-offset;
  return (offset + Math.floor(Math.random()*remainder));
}

generateNewColor = function(offset) {
 return 'rgb('+generateColNum(offset)+','+generateColNum(offset)+','+generateColNum(offset)+')';
}

onDad = function(e) {
  let dadImage = this.querySelector(".dad-image");
  dadImage.remove();

  let joke = this.querySelector(".joke");
  joke.style.visibility = "visible";
  pop.play();
}

async function loadDads(){
  let response;
  try {
    npResponse = await axios.get("response.json");
    let icons = npResponse.data.icons;

    for(let [i, v] of icons.entries()) {
      let nDiv = document.createElement("div");
      nDiv.setAttribute("class", "dadElement");
      let dadImg = new Image(120, 120);
      dadImg.setAttribute("class", "dad-image");
      dadImg.src = v.preview_url;
      nDiv.appendChild(dadImg);
      jokeDiv = document.createElement("div");
      jokeDiv.setAttribute("class", "joke");
      jokeDiv.innerHTML = jokesList[i];
      jokeDiv.style.visibility = "hidden";
      nDiv.appendChild(jokeDiv);
      nDiv.style.backgroundColor = '#ffffff';
      nDiv.addEventListener("click", onDad);
      gridContainer.appendChild(nDiv);
    }
  }
  catch (err) {
    console.error(err);
  }
}

loadJokes = async () => {
  let randPage1 = Math.ceil(Math.random()*15);
  let randPage2;
  try {
    while(true) {
      randPage2 = Math.ceil(Math.random()*15);
      if(randPage2!==randPage1) {
        break;
      }
    }
    config = { headers: { Accept: 'application/json'}};
    djResponse = await axios.get(`https://icanhazdadjoke.com/search?limit=25&page=${randPage1}`, config);
    results = djResponse.data.results;
    for(r of results) {
      jokesList.push(r.joke);
    }
  }
  catch (err) {
    console.error(err);
  }
  try {
    config = { headers: { Accept: 'application/json'}};
    djResponse = await axios.get(`https://icanhazdadjoke.com/search?limit=25&page=${randPage2}&`, config);
    results = djResponse.data.results;
    for(r of results) {
      jokesList.push(r.joke);
    }
    loadDads();
  }
  catch (err) {
    console.error(err);
  }
}

loadJokes();
