// Creates event listener
var button = document.getElementsByClassName('search-field__button')[0];
button.addEventListener('click', searchInput);

function searchInput(s){
    s.preventDefault();
    console.log("press here to get input and alert");
    alert('searchInput');

    //create XHR Object
    var xhr = new XMLHttpRequest();

    //OPEN - type, url/file, async
    xhr.open('GET', 'info.txt', true);

    xhr.onload = function(){
        if(xhr.status == 200){
        console.log(xhr.responseText);
        }
    }
      
    // Sends request   
    xhr.send();
}

