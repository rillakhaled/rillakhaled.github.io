let grass = SVG('#grass');
let sky = SVG('#sky');
let sun = SVG('#sun');
let stars = SVG('#stars');

let skyFill = '#87CEEB';
let sunFill = '#FFA500';
let grassFill = '#3CB371';

let d = new Date();
let localHour = d.getHours();

const address = document.querySelector('#where');

address.addEventListener('change', function (e) {
  e.preventDefault();
  axios.get('https://api.positionstack.com/v1/forward', {
    params: {
      access_key: '220d42a6d8a08281a8e8b8a0b5b7779e',
      query: e.target.value,
      limit: 1,
      timezone_module: 1
    }
  })
  .then(function (response) {
    let timezone = response.data.data[0].timezone_module;
    let utcHour = d.getUTCHours();
    localHour = utcHour + (timezone.offset_sec/3600);
    localHour = localHour%24;
    console.log(localHour);
    renderImage();
  }).catch(err => {
    console.log(err);
    // do nothing.
  });
});

renderImage = function() {
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
    skyFill = '#FFA07A';
    sunFill = '#FF4500';
    grassFill = '#4C9900';
    stars.hide();
  }
  else if(localHour >= 12) {
    stars.hide();
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
