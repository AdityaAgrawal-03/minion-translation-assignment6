var btnTranslate = document.getElementById('btn-translate');
var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');

var url = "https://api.funtranslations.com/translate/minion.json";


// construct URL
function addTextParameterToURL(textParameter) {
  return `${url}?text=${textParameter}`;
}

// click handler function
function clickHandler() {
  var textParameter = inputText.value;
  
  // addTextParameterToURL(textParameter);
  // console.log(url)

  if (textParameter.length === 0) {
    alert("you need to write a sentence") 
  }

  fetch(addTextParameterToURL(textParameter))
  .then(response => response.json())
  .then(json => {
    translatedText.innerText = json.contents.translated;
  })
  .catch(error => {
    console.log('error occured', error);
  })
}

btnTranslate.addEventListener('click', clickHandler);