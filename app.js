let textArea = document.querySelector("textarea");
let transButton = document.querySelector("#tButton");
let outputText = document.querySelector("#output");

let apiUrl = "https://api.funtranslations.com/translate/minion.json"

function getFetchUrl(input){
    return apiUrl + "?text=" + input 
}
function errorHandler(error){
    console.log("Error has Occured ! : "+ error);
    alert("Something went wrong with server! Please try after some time");
}
function clickEventHandler(){
    let inputText = textArea.value
    fetch(getFetchUrl(inputText))
    .then(Response => Response.json())
    .then(json=>{
        let finaloutput = json.contents.translated;
        outputText.innerText = finaloutput;
    }).catch(errorHandler)
}

transButton.addEventListener("click", clickEventHandler);











