
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
        'X-RapidAPI-Key': '916184d891mshd5835be333455a1p1e5d57jsnc62efb405fe5',
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
