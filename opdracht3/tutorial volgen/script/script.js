var header = document.querySelector('header');
var section = document.querySelector('section');
var aside = document.querySelector('aside');
var myH2 = document.querySelector('h2');
var afbeelding = document.querySelector('img');
var knop = document.querySelector('button');
var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&APPID=15ab71533f173d32e3e44c893b687553';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var weer = request.response;
    invullenHeader(weer);
};

function invullenHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    var weather = jsonObj["weather"];
    header.appendChild(myH1);
    console.log(weather);
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var wind = jsonObj["wind"];
    myH3.textContent ='Weersomstandigheden:';
    aside.appendChild(myH3);
    myPara1.textContent = 'Windkracht: ' + wind.speed;
    aside.appendChild(myPara1);
    var windrichting = document.createElement('img');
    windrichting.src = '../img/kompas.png';
    var richting = wind.deg;
    console.log(richting);

    aside.appendChild(windrichting);
    console.log(wind.speed);
    var windkracht = wind.speed;
    var main = jsonObj["main"];
    var temperatuur = main.temp;
    console.log(temperatuur);
    myPara2.textContent = 'Temperatuur: ' + temperatuur + ' °C';
    aside.appendChild(myPara2);
    knop.addEventListener('click', function() {
        console.log(windrichting);
        document.querySelector('h1').textContent = 'Kan ik vandaag kitesurfen in ' + cityID + '?'; windrichting.classList.add('kompas');
        windrichting.style.transform = 'rotate('+ richting + 'deg)';
        aside.style.position = 'relative';
        aside.style.top = '-2em';
        knop.style.visibility = 'hidden';
        myH1.textContent = weather[0].description;
        aside.style.visibility = 'visible';
        if (windkracht >= 5 && temperatuur >= 10) {
            myH2.textContent = 'Ja! Je kan vandaag gaan kitesurfen. Het is lekker warm en er staat een goede wind.';
            console.log('topweer');
            afbeelding.src = 'img/kitesurf.gif';
        }
         else if (windkracht < 5 && temperatuur >= 10) {
            myH2.textContent = 'Hmm... Ik weet het niet zeker. Het is lekker weer, maar ik weet niet zeker of er genoeg wind staat.';
            afbeelding.src = 'img/nokitesurf.gif';

        }
         else if (windkracht >= 5 && temperatuur < 10) {
            myH2.textContent = 'Hmmm... Ik weet het niet zeker. Er is genoeg wind om te surfen, maar het weer is niet top.';

        }
         else {
            myH2.textContent = 'Nee, helaas. Het weer is niet goed en er staat niet genoeg wind om te surfen.';
            afbeelding.src = 'img/nokitesurf.gif';
        }
    });
}

























