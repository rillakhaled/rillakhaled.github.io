
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
        'X-RapidAPI-Key': '4e345ab085msh98a9faa6df16307p151054jsnb23925c30d59'
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
