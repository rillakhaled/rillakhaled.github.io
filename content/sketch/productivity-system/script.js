const body = document.querySelector("body");
let todo = document.querySelector("#todo");

let btnDone = document.querySelector("#btn-done");
let btnDecimateOne;
let btnDecimateTwo;
let btnEndGame;

let list = document.querySelector("#list");
let listMinusOne;
let listMinusTwo;

let singleWorry = document.querySelector("#singleWorry");
let megaWorry = new String();
let worriesLength = 0;
let testMode = false;

sectionWowsers = function() {
  let secWowsers = "<p>Wowsers! That's quite the list. What if I were to tell you that I could help you decimate one of those tasks right now?</p><button id =\"btn-dec-one\">do it</button>";
  return secWowsers;
}

sectionAgain = function() {
  let secAgain = "<p>Magic, right? And the tasks themselves are now that much more novel; more interesting; <em>more worthy of consideration</em> than before. And we could do that very same thing <em>again</em>...</p><button id =\"btn-dec-two\">do it</button><p>Or we could cut straight to the logical conclusion.</p><button id =\"btn-endgame\">cut to the logical conclusion</button>";
  return secAgain;
}

sectionCircle = function() {
  let secCircle = `<div class=\"circle\"><i></i>${megaWorry.toUpperCase()}</div>`;
  return secCircle;
}
sectionBoom = function() {
  let secBoom = "<p><b>BOOM.</b> You used to have <span id=\"worryCount\"></span> responsibilities, now you have just one. You have a <b>great monotask</b>. It is so great and so responsible that it has moved into its own bullet point, a makeshift abode of sorts. Formidable!</p><p>But with great monotasks comes great responsibility. The monotask is <em>only</em> achieved if all of it is achieved. You can only cross it out if you did <em>all. of. it.</em> Are you ready to take on that monotask?</p><p>You know what? I sense <b>great power in you</b>. So I will help you out more: I will share with you how to perform some little-known spacetime editing magic to free yourself from your monotask. It only works if you follow the instructions <em>to the letter</em> and in precisely the following order</em>:</p><ol><li>Print out the monotask on a sheet of A4 (and not US Letter).</li><li>Read aloud the printout of the monotask while flossing (either the dance move or the dental hygiene step, your choice).</li><li>Scrunch up the printout into a tight, perfect sphere.</li><li>Place the balled printout between your bedsheet and your mattress, positioning it such that it would lie exactly under the small of your back.</li><li>Immediately nap on your bed for a minimum of two unbroken hours.</li></ol><p>If you have done exactly as I have advised, when you awaken, you will find that the monotask is achieved.</p><p>If the monotask has not been achieved, allow me to gently suggest that you did not follow my process exactly. Repeat the process and thank me later.</p>";
  return secBoom;
}

todo.addEventListener("change", function(e) {
  e.preventDefault();
  let item = document.createElement('li');
  item.innerText = e.target.value.toUpperCase();
  list.appendChild(item);
  e.target.value = "";
  e.target.placeholder = "Cancel social obligations on account of hand, foot, and mouth disease, etc.";
})

addTestItem = function(itemDescription) {
  let item = document.createElement('li');
  item.innerText = itemDescription.toUpperCase();
  list.appendChild(item);
}

btnDone.addEventListener("click", function(e) {
  e.preventDefault();
  let worries = list.querySelectorAll("li");
  worriesLength = worries.length;

  if(worriesLength >= 5 || testMode) {
    if(testMode) {
      addTestItem("Do the washing");
      addTestItem("Write the letter for Hamza");
      addTestItem("Plant the new plants outside");
      addTestItem("Build webpage for A MAZE game");
      addTestItem("Respond to all emails");
      worries = list.querySelectorAll("li");
    }
    for(w of worries) {
      let cleaned = w.innerText.trim();
      megaWorry += (w.innerText+" ");
    }
    megaWorry = megaWorry.trim();
    megaWorry = megaWorry.toUpperCase();
    todo.remove();
    this.remove();
    list.insertAdjacentHTML("afterend", sectionWowsers());

    btnDecimateOne = document.querySelector("#btn-dec-one");

    btnDecimateOne.addEventListener("click", function(e) {
      e.preventDefault();
      let worries = list.querySelectorAll("li");
      worriesLength = worries.length;
      generateShorterList(1);
      this.remove();
    })
  }
  else {
    todo.placeholder="Take this seriously, please. Five respossibilities.";
  }
})

retrieveNextItemWords = function(words, itemLength) {
  let nextItem = "";
  for(let itemI = 0; itemI < itemLength; itemI++) {
    if(words.length > 0) {
      nextItem += words.shift()+" ";
    }
    else {
      break;
    }
  }
  nextItem = nextItem.trim();
  return nextItem;
}

generateShorterList = function(subtract) {
  let worries = list.querySelectorAll("li");
  worriesLength = worries.length;

  let newNumberItems = worriesLength-subtract;
  let megaWordsArray = megaWorry.split(' ');
  let numWordsPerItem = Math.ceil(megaWordsArray.length/newNumberItems);

  let currentListString = `<ul `;

  if(subtract === 1) {
    currentListString += `id="list-minus-one">`;
  }
  else {
    currentListString += `id="list-minus-two">`;
  }
  for(let i = 0; i < newNumberItems; i++) {
    currentListString += '<li>';
    currentListString += retrieveNextItemWords(megaWordsArray, numWordsPerItem);
    currentListString += '</li>';
  }
  currentListString += `</ul>`;

  if(subtract === 1){
    let container = document.querySelector(".container");
    container.insertAdjacentHTML("beforeend", currentListString+sectionAgain());

    btnDecimateTwo = document.querySelector('#btn-dec-two');
    btnDecimateTwo.addEventListener("click", function(e) {
      e.preventDefault();
      generateShorterList(2);
      this.remove();
    })

    btnEndGame = document.querySelector('#btn-endgame');
    btnEndGame.addEventListener("click", function(e) {
      e.preventDefault();
      let container = document.querySelector(".container");
      container.insertAdjacentHTML("beforeend", sectionCircle());
      container.insertAdjacentHTML("beforeend", sectionBoom());
      let spanWorryCount = document.querySelector("#worryCount");
      spanWorryCount.innerText = worriesLength;
      this.remove();
    })
  }
  else {
    btnDecimateTwo = document.querySelector('#btn-dec-two');
    btnDecimateTwo.insertAdjacentHTML("afterend", currentListString);
  }
}
