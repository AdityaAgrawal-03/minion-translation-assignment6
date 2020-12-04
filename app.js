var btnTranslate = document.getElementById('btn-translate');
var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');

var minionURL = "https://api.funtranslations.com/translate/minion.json";


// construct URL
function addTextParameterToURL(textParameter) {
  var endcodedURI = encodeURIComponent(textParameter);
  return `${minionURL}?text=${endcodedURI}`;
}

// click handler function
function clickHandler() {
  var textParameter = inputText.value;
  var serverURL = addTextParameterToURL(textParameter);

  console.log(serverURL);

  if (textParameter.length === 0) {
    alert("You need to write a sentence");
  } else if (/^\d+$/.test(textParameter)) {
    alert("You need to include letters in your sentence");
  } else {
    fetch(serverURL)
    .then(response => response.json())
    .then(json => { 
      translatedText.innerText = json.contents.translated;
    })
    .catch(error => {
      console.log('error occured', error);
    })
  }
}

btnTranslate.addEventListener('click', clickHandler);