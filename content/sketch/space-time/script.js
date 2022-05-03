let grass = SVG('#grass');
let sky = SVG('#sky');
let sun = SVG('#sun');
let stars = SVG('#stars');

let skyFill = '#87CEEB';
let sunFill = '#FFA500';
let grassFill = '#3CB371';

let d = new Date();
let localHour = d.getHours();
let utcHour = d.getUTCHours();

const address = document.querySelector('#where');

async function locationThenTime(e) {
  e.preventDefault();
  let response;
  try {
    response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${e.target.value}&apiKey=${config.geo}`);
  }
  catch (error) {
    console.log(error);
    renderImage();
  }
  try {
    const secondResponse = await axios.get(`https://api.bigdatacloud.net/data/timezone-by-location?latitude=${response.data.features[0].geometry.coordinates[1]}&longitude=${response.data.features[0].geometry.coordinates[0]}&utcReference=0&key=${config.time}`);
    const utcOffset = secondResponse.data.utcOffsetSeconds;
    localHour = utcHour + (utcOffset/3600);
    if(localHour > 24){
      localHour-=24;
    }
    else if(localHour < 0){
      localHour+=24;
    }
    // console.log(localHour);
    renderImage();
  }
  catch(error) {
    console.log(error);
    renderImage();
  }
}

address.addEventListener('change', locationThenTime);

function renderImage() {
  if (localHour >= 22) {
    stars.show();
    sun.hide();
    skyFill = '#000066';
    grassFill = '#193300';
  }
  else if(localHour >= 20) {
    stars.show();
    sun.hide();
    skyFill = '#000080';
    grassFill = '#193300';
  }
  else if(localHour >= 18) {
    stars.show();
    sun.hide();
    skyFill = '#8A2BE2';
    grassFill = '#336600';
  }
  else if(localHour >= 16) {
    stars.hide();
    sun.show();
    skyFill = '#FFA07A';
    sunFill = '#FF4500';
    grassFill = '#4C9900';
  }
  else if(localHour >= 12) {
    stars.hide();
    sun.show();
    skyFill = '#87CEEB';
    sunFill = '#FFA500';
    grassFill = '#4C9900';
  }
  else if(localHour >= 8) {
    stars.hide();
    sun.show();
    skyFill = '#3399FF';
    sunFill = '#FFA500';
    grassFill = '#4C9900';
  }
  else if(localHour >= 6) {
    stars.hide();
    sun.show();
    skyFill = '#0066CC';
    sunFill = '#FF9933';
    grassFill = '#4C9900';
  }
  else if(localHour >= 5) {
    stars.hide();
    sun.show();
    skyFill = '#004C99';
    sunFill = '#FF3333';
    grassFill = '#336600';
  }
  else if(localHour >= 4) {
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
}

renderImage();
