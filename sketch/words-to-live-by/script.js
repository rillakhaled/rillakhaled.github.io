let paragraphs = document.querySelectorAll("p");
let instructions = document.querySelector("#instructions");
let redactionText = document.querySelector(".redaction-text");
let redactedText = document.querySelector(".redacted-text");

function makeSpan(word, instruction) {
  if(!instruction) {
    return `<span class="redacted">${word} </span>`;
  }
  else {
    return `<span class="instruction">${word} </span>`;
  }
}

let redactedTextHTML = "";

for(p of paragraphs){
  redactedTextHTML += "<p>";
  let pWords = p.innerText.split(" ");
  for(w of pWords) {
    redactedTextHTML += makeSpan(w, false);
  }
  redactedTextHTML += "</p>"
}

redactedText.innerHTML = redactedTextHTML;
let iWords = instructions.textContent.split(" ");
let instructionsHTML = "";

for(i of iWords) {
  instructionsHTML += makeSpan(i, true);
}

let lastParagraph = redactedText.lastChild;
lastParagraph.insertAdjacentHTML('beforeend', instructionsHTML);

let redactedSet = document.querySelectorAll(".redacted");
for(r of redactedSet) {
  r.addEventListener("mouseenter", function(){
    this.classList.remove("redacted");
    this.classList.add("redacted-hover");
  })
  r.addEventListener("mouseleave", function(){
    this.classList.remove("redacted-hover");
    this.classList.add("redacted");
  })
  r.addEventListener("touchstart", function(){
    this.classList.remove("redacted");
    this.classList.add("redacted-hover");
  })
  r.addEventListener("touchend", function(){
    this.classList.remove("redacted-hover");
    this.classList.add("redacted");
  })
}

let instructionSet = document.querySelectorAll(".instruction");
for (ins of instructionSet) {
  ins.addEventListener("mouseenter", function () {
    this.classList.remove("instruction");
    this.classList.add("read-instruction");
  })
}

redactionText.remove();
