var buttonTranslate = document.querySelector("#btn-translate");
var ipText = document.querySelector("#inputID");
var outputField = document.querySelector("#output");

var sourceURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(input) 
{
    return sourceURL + "?text=" + input;
}

function errorHandler(error){
    console.log("Error Occured: ",error);
    alert("Something went wrong with the server! Please try again after sometime :(");
}

function clickHandler() 
{
    var textIp = ipText.value;
    
    fetch(getTranslationURL(textIp))
        .then(response => response.json())
        .then(json => 
            {
            var translatedText = json.contents.translated;
            outputField.innerText = translatedText;
           })

    .catch(errorHandler);

}

buttonTranslate.addEventListener("click",clickHandler);