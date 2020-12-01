var btnTranslate = document.getElementById('btn-translate');
var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');

var url = "https://api.funtranslations.com/translate/minion.json?text=";

// add text parameter to url
function addTextToURL(inputTxt) {
  url = url + inputTxt;
  return url;
  
}


function clickHandler() {
  var inputTxt = inputText.value;
  addTextToURL(inputTxt);

  // console.log(url)
  // console.log(inputTxt)

  fetch(url)
  .then(response => response.json())
  .then(json => translatedText.value = json.contents.translated);


}

btnTranslate.addEventListener('click', clickHandler);