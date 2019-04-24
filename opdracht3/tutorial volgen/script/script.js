var header = document.querySelector('header');
var section = document.querySelector('section');
var aside = document.querySelector('aside');
var myH2 = document.querySelector('h2');
var afbeelding = document.querySelector('img');
var artikel = document.querySelector('article');
var knoppen = document.querySelectorAll('button');
var body = document.querySelector('body');



knoppen.forEach(function(knop)  {
    knop.addEventListener("click", function() {
        var cityID = this.getAttribute('value');
        var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&units=metric&APPID=15ab71533f173d32e3e44c893b687553';
        var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var weer = request.response;
    invullenHeader(weer);
};




    function invullenHeader(jsonObj) {
        section.style.display = 'none';
        var titel = document.querySelector('h1');
        titel.textContent = 'Kan ik vandaag kitesurfen in ' + cityID + '?';
        var myH1 = document.createElement('h1');
        myH1.style.textTransform = 'capitalize';
        var weather = jsonObj["weather"];
        header.appendChild(myH1);
        console.log(weather);
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var zon = document.createElement('img');
        zon.src = '../img/zon.png';
        body.appendChild(zon);
        zon.classList.add('hoek');
        var vliegtuig = document.createElement('img');
        vliegtuig.src = '../img/vliegtuig.png';
        body.appendChild(vliegtuig);
        vliegtuig.classList.add('vliegtuig');
        var strand = document.createElement('img');
        strand.src = '../img/strand.jpeg';
        body.appendChild(strand);
        strand.classList.add('strand');
        var wind = jsonObj["wind"];
        myH3.textContent ='Weersomstandigheden:';
        aside.appendChild(myH3);
        myPara1.textContent = 'Windkracht: ' + wind.speed;
        aside.appendChild(myPara1);
        var windrichting = document.createElement('img');
        windrichting.src = '../img/kompas.png';
        windrichting.classList.add('kompas');
        var richting = wind.deg;
        aside.appendChild(windrichting);
        var windkracht = wind.speed;
        var main = jsonObj["main"];
        var temperatuur = main.temp;
        myPara2.textContent = 'Temperatuur: ' + temperatuur + ' °C';
        aside.appendChild(myPara2);
        afbeelding.style.width = '20em';
        artikel.style.visibility = 'hidden';
        windrichting.style.transform = 'rotate(' + richting + 'deg)';
        aside.style.position = 'relative';
        aside.style.top = '-2em';
        aside.classList.add('wind');
        knop.style.display = 'none';
        myH1.textContent = weather[0].description;
        aside.style.visibility = 'visible';
//            if (windkracht >= 5 && temperatuur >= 10) {
//                myH2.textContent = 'Ja! Je kan vandaag gaan kitesurfen. Het is lekker warm en er staat een goede wind.';
//
//            }
//             else if (windkracht < 5 && temperatuur >= 10) {
//                myH2.textContent = 'Hmm... Ik weet het niet zeker. Het is lekker weer, maar ik weet niet zeker of er genoeg wind staat.';
//
//
//            }
//             else if (windkracht >= 5 && temperatuur < 10) {
//                myH2.textContent = 'Hmmm... Ik weet het niet zeker. Er is genoeg wind om te surfen, maar het weer is niet top.';
//                 afbeelding.src = 'img/nokitesurf.gif';
//
//            }
//             else {
//                myH2.textContent = 'Nee, helaas. Het weer is niet goed en er staat niet genoeg wind om te surfen.';
//                afbeelding.src = 'img/nokitesurf.gif';
//            }
        };
    })
});

