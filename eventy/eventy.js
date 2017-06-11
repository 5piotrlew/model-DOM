'use strict';

var secondLink = document.getElementsByTagName('a')[1];

console.log(secondLink);

function alarm(event) {
    event.preventDefault();
    console.log('klieknieto kolejny link');
    
    console.log(event);
}

secondLink.onclick = alarm;