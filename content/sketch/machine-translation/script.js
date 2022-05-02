
const wordicles = document.querySelectorAll('.syn');

for(let word of wordicles) {
  word.addEventListener('click', function (e) {
    let targetWord = e.target.innerText;
    let URL = `https://wordsapiv1.p.rapidapi.com/words/${targetWord}/synonyms`;
    const options = {
      method: 'GET',
      url: URL,
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': config.rapid,
      }
    };
    axios.request(options).then(function (response) {
      let synonyms = response.data.synonyms;
      if(synonyms.length > 0) {
        let i = Math.floor(Math.random()*synonyms.length);
        e.target.innerText = synonyms[i];
      }
    }).catch(function (error) {
    	console.error(error);
    });
  })
}
