var indicator = 1;
var display = document.getElementById('center');
var linksknoppen = document.querySelectorAll('button:first-of-type');
var rechtsknoppen = document.querySelectorAll('button:nth-of-type(2)');
var div = document.querySelector('div');



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

div.addEventListener("scroll", function () {
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
div.addEventListener("scroll", function () {
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
});

