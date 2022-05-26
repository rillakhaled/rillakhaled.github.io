class Cell {

  index = 0;
  frameFilepath = [];

  constructor(start) {
    // load up an array of frames with filepaths
    for(let i = 1; i <= 30; i++){
      this.frameFilepath.push(`drops/${i}.png`);
    }

    // set the index to point to the appropriate location
    this.index = start;
  }

  advance() {

    // the index advances 1 frame at a time and loops at 30
    if(this.index < 29) {
      this.index++;
    }
    else {
      this.index = 1;
    }
  }

  getFrame() {
    return this.frameFilepath[this.index];
  }
}

let frameCount = 0;
let playing = false;
let grid = document.querySelector(".grid-container");

function tick() {
  if(playing) {
    frameCount++;
    if(frameCount%10 === 0) {
      let drops = document.querySelectorAll(".drop");
      for(d of drops) {
        d.cell.advance();
        let d_image = d.querySelector(".dropImage");
        d_image.src = d.cell.getFrame();
      }
    }
    window.requestAnimationFrame(tick);
  }
}


for(let i = 1; i <= 6; i++) {
  let dropDiv = document.createElement("div");
  dropDiv.cell = new Cell(i);
  dropDiv.setAttribute("class", "drop");
  let dropI = document.createElement("img");
  dropI.setAttribute("class", "dropImage");
  dropI.src = dropDiv.cell.getFrame();
  dropDiv.appendChild(dropI);
  grid.appendChild(dropDiv);

  dropDiv.addEventListener("mouseenter", function(){
    playing = true;
    frameCount = 0;
    window.requestAnimationFrame(tick);
  })
  dropDiv.addEventListener("mouseleave", function(){
    playing = false;
  })
  dropDiv.addEventListener("touchstart", function(){
    playing = !playing
    window.requestAnimationFrame(tick);
  })
}
