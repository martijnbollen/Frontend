var indicator = 1;
var display = document.getElementById('center');
var linksknoppen = document.querySelectorAll('.centerpiece button:first-of-type');
var rechtsknoppen = document.querySelectorAll('.centerpiece button:nth-of-type(2)');
var div = document.querySelector('div');
var linksskippen = document.querySelector('.bar button:first-of-type');
var rechtsskippen = document.querySelector('.bar button:nth-of-type(2)');



linksknoppen.forEach(function(linksknop) {
    linksknop.addEventListener("click", function () {
        if (indicator === 1) {
            console.log("overflow");
            document.querySelector('.bar img:nth-of-type(' + indicator + ')').classList.add = 'active';
        }
        else {
            indicator--;
            console.log(indicator);
            display.src = "img/foto" +indicator+ ".jpg";
            document.querySelector('.bar img:nth-of-type(' + indicator + ')').classList.add = 'active';
        }

    })
});

rechtsknoppen.forEach(function(rechtsknop) {
    rechtsknop.addEventListener("click", function () {
        if (indicator == 4) {
            console.log("overflow");
            document.querySelector('.bar img:nth-of-type(' + indicator + ')').classList.add = 'active';
        }
        else {
            indicator++;
            console.log(indicator);
            display.src = "img/foto" +indicator+ ".jpg";
            document.querySelector('.bar img:nth-of-type(' + indicator + ')').classList.add = 'active';
        }

    })
});

linksskippen.addEventListener("dblclick", function () {
        if (indicator != 1) {
            var indicator = 1;
            console.log('linksskip');
            display.src = "img/foto" +indicator+ ".jpg";
        }
        else {
            display.src = "img/foto" +indicator+ ".jpg";
        }



});

rechtsskippen.addEventListener("dblclick", function () {
        if (indicator != 4) {
            var indicator = 4;
            console.log('rechtsskip');
            display.src = "img/foto" +indicator+ ".jpg";
        }
        else {
            display.src = "img/foto" +indicator+ ".jpg";
        }



});
