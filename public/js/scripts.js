    
  let typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 0,
    backDelay: 5000,
    startDelay: 500,
    showCursor: false,
    loop: true,
});


document.onmousemove = function(){
  let x = event.offsetX;
  let y = event.offsetY;    
  document.body.style.backgroundPositionX = -x + "px";
  document.body.style.backgroundPositionY = -y + "px";        
}
