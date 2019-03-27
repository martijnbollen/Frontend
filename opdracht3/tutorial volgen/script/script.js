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

request.onload = function() {
    var weer = request.response;
    invullenHeader(weer);
//    showWind(weer);
}
//console.log(data);

function invullenHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    var weather = jsonObj["weather"];
    myH1.textContent = weather[0].description;
    header.appendChild(myH1);
    console.log(weather);

    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var wind = jsonObj["wind"];
    myPara1.textContent = 'Windkracht: ' + wind.speed;
    aside.appendChild(myPara1);
    console.log(wind.speed);
    var windkracht = wind.speed;
    var main = jsonObj["main"];
    myPara2.textContent = main.temp;
    knop.addEventListener('click', function() {
        if (windkracht >= 5 && temperatuur >= 10) {
            myH2.textContent = 'Ja! Je kan vandaag gaan kitesurfen. Het is lekker warm en er staat een goede wind.';
            console.log('topweer');
            afbeelding.src = 'img/kitesurf.gif';
        }
        else if (windkracht < 5 && temperatuur >= 10) {
            myH2.textContent = 'Hmm... Ik weet het niet zeker. Het is lekker weer, maar ik weet niet zeker of er genoeg wind staat.';
            afbeelding.src = 'img/nokitesurf.gif';
            console.log('Mwa..');
        }
        else if (windkracht >= 5 && temperatuur < 10) {
            myH2.textContent = 'Hmmm... Ik weet het niet zeker. Er is genoeg wind om te surfen, maar het weer is niet top.';
            console.log('Hmmm..');
        }
        else {
            myH2.textContent = 'Nee, helaas. Het weer is niet goed en er staat niet genoeg wind om te surfen.';
            console.log('Nope');
        }
    });
    var temperatuur= main.temp;

}

























