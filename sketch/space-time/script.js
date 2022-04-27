let grass = SVG('#grass');
let sky = SVG('#sky');
let sun = SVG('#sun');
let stars = SVG('#stars');

let skyFill = '#87CEEB';
let sunFill = '#FFA500';
let grassFill = '#3CB371';

const d = new Date();
let hour = d.getHours();
// document.getElementById("hour").innerHTML = hour;
if (hour >= 22) {
    stars.show();
    sun.hide();
    skyFill = '#000066';
    grassFill = '#193300';
}
if (hour >= 20) {
    stars.show();
    sun.hide();
    skyFill = '#000080';
    grassFill = '#193300';
}
else if (hour >= 18) {
    stars.show();
    sun.hide();
    skyFill = '#8A2BE2';
    grassFill = '#336600';
}
else if (hour >= 16) {
    skyFill = '#FFA07A';
    sunFill = '#FF4500';
    grassFill = '#4C9900';
    stars.hide();
}
else if (hour >= 12) {
    stars.hide();
    skyFill = '#87CEEB';
    sunFill = '#FFA500';
    grassFill = '#4C9900';
}
else if (hour >= 8) {
    stars.hide();
    sun.show();
    skyFill = '#3399FF';
    sunFill = '#FFA500';
    grassFill = '#4C9900';
}
else if (hour >= 6) {
    stars.hide();
    sun.show();
    skyFill = '#0066CC';
    sunFill = '#FF9933';
    grassFill = '#4C9900';
}
else if (hour >= 5) {
    stars.hide();
    sun.show();
    skyFill = '#004C99';
    sunFill = '#FF3333';
    grassFill = '#336600';
}
else if (hour >= 4) {
    stars.show();
    sun.hide();
    skyFill = '#004C99';
    grassFill = '#336600';
}
else {
    stars.show();
    sun.hide();
    skyFill = '#000050';
    grassFill = '#193300';
}

sky.fill(skyFill);
sun.fill(sunFill);
grass.fill(grassFill);