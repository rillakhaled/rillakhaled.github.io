let eyes = [];
let p1_eyes = [];
let p2_eyes = [];
let p1 = SVG("#p1");
let p2 = SVG("#p2");
let frame = 0;
let is_blinking = false;
let p1_is_blinking = false;
let p2_is_blinking = false;

let p1_rate = 500;
let p2_rate = 600;


function unblink() {
  if(is_blinking) {
    if(p1_is_blinking){
      for(e of p1_eyes) {
        e.svgObject.attr("fill", "#F5F5F5");
      }
      p1_is_blinking = false;
    }
    if(p2_is_blinking) {
      for(e of p2_eyes) {
        e.svgObject.attr("fill", "#F5F5F5");
      }
    }
    is_blinking = false;
  }
}

function blink(b_eye) {
  b_eye.svgObject.attr("fill", "black");
  const myTimeout = setTimeout(unblink, 50);
}


function tick(e){
  frame++;
  if((frame%p1_rate)===0) {
    is_blinking = true;
    p1_is_blinking = true;
    for(e of p1_eyes) {
      blink(e);
    }
  }
  if((frame%p2_rate)===0) {
    is_blinking = true;
    p2_is_blinking = true;
    for(e of p2_eyes) {
      blink(e);
    }
  }
  window.requestAnimationFrame(tick);
}

for(let c = 1; c <= 9; c++) {
  let eye = new Object();
  eye.svgObject = SVG(`#e${c}`);
  eye.x = eye.svgObject.cx();
  eye.y = eye.svgObject.cy();
  eyes.push(eye);
  if(c < 7) {
    p1_eyes.push(eye);
  }
  else {
    p2_eyes.push(eye);
  }
}
let e1 = SVG('#e1');
window.requestAnimationFrame(tick);

document.onmousedown = function(e){
  for(eye of eyes) {
    eye.svgObject.attr("fill", "black")
  }
}
document.onmouseup = function(e){
  for(eye of eyes) {
    eye.svgObject.attr("fill", "#F5F5F5")
  }
}

document.onmousemove = function(e){
  let width = window.innerWidth;
  let height = window.innerHeight;
  let x = event.clientX;
  let y = event.clientY;

  let a = (x / width)*20;
  let b = (y / height)*20;

  for(eye of eyes) {
    eye.svgObject.cx(eye.x);
    eye.svgObject.cy(eye.y);
    eye.svgObject.dmove(a, b);
    //e.style.cssText = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%)";
  }
}
