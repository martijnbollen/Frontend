var header = document.querySelector('header');
var section = document.querySelector('section');
var aside = document.querySelector('aside');
var myH2 = document.querySelector('h2');
var afbeelding = document.querySelector('img');
var artikel = document.querySelector('article');
var knoppen = document.querySelectorAll('button');
var body = document.querySelector('body');
var algemeen = document.querySelector('main');
var H1 = document.querySelector('h1');



knoppen.forEach(function (knop) {
    knop.addEventListener("click", function () {
        var cityID = this.getAttribute('value');
        var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&units=metric&APPID=15ab71533f173d32e3e44c893b687553';
        var request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            var weer = request.response;
            start(weer);
        };


        function derest(jsonObj) {
            algemeen.style.display = 'block';
            aside.style.display = 'block';
            section.style.display = 'none';
            H1.style.display = 'block';
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
            myH3.textContent = 'Weersomstandigheden:';
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
            var hitte = main.temp;
            var temperatuur = Math.round(hitte);
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

            window.addEventListener('keydown', function (e) {
                if (e.key === "Escape") {
                    console.log('goeie toets');
                    location.reload(false);
                }
                else {
                    alert("Deze toets doet niks. Probeer de Escape-toets is!");
                    console.log('foute toets');
                }
            })

            };


        function start(jsonObj) {
            algemeen.style.display = 'none';
            aside.style.display = 'none';
            section.style.display = 'block';
            H1.style.display = 'none';
            setTimeout(derest, 6000, jsonObj);
        }

    });
});
