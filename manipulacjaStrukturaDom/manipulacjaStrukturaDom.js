'use strict';

var mainHeader = document.getElementById('main-header');

console.log(mainHeader);

mainHeader.innerHTML = "tresc naglowka";

var link = document.getElementsByClassName('link')[0];

console.log(link);

link.href = "https://akademia108.pl";

link.className = "nowa-klasa";

mainHeader.style.color = "#11aa22";

link.text = "dodany tekst";

