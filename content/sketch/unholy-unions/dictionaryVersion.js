let queryString = document.querySelector('#queryString');
let main = document.querySelector('.main');
let prs = document.querySelector('#prs');
let def = document.querySelector('#def');

cancelRequest = async function() {
  prs.innerHTML = "";
  def.innerHTML = "That <em>might</em> be a word in <em>a</em> language, but Merriam-Webster has no entry for it."
  try {
    gResponse = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=Ya7E7hPo2So9SSqolfqAA6brBdVOREeT&s=${"I don't know"}&weirdness=2`);
    let iDetails = gResponse.data.data.images.original;
    let giphyImage = new Image(iDetails.width, iDetails.height);
    giphyImage.src = iDetails.url;
    while (imgContainer.firstChild) {
      imgContainer.removeChild(imgContainer.firstChild);
    }
    imgContainer.appendChild(giphyImage);

  } catch (err) {
    console.error(err);
  }

}

queryString.addEventListener("change", function(e) {
  e.preventDefault();
  let q = e.target.value;
  if(q.trim().length === 0) {
    return;
  }

  const sendGetRequest = async () => {
    let dResponse;
    let gResponse;
    let sentence;
    try {
      dResponse = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${q}?key=d447b574-944c-4553-80cc-7a7a6fd9b0e6`);
      if(dResponse.data.length === 0 || dResponse.data[0].hwi === undefined) {
        return cancelRequest();
      }
      prs.innerHTML = `[${dResponse.data[0].hwi.prs[0].mw}]`;
      let sentences = dResponse.data[0].shortdef;
      sentence = sentences.join(", ");
      def.innerHTML = sentence;
    } catch (err) {
      console.error(err);
    }
    try {
      gResponse = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=Ya7E7hPo2So9SSqolfqAA6brBdVOREeT&s=${sentence}&weirdness=2`);
      let iDetails = gResponse.data.data.images.original;
      let giphyImage = new Image(iDetails.width, iDetails.height);
      giphyImage.src = iDetails.url;
      while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
      }
      imgContainer.appendChild(giphyImage);

    } catch (err) {
      console.error(err);
    }
  }
  sendGetRequest();
});
