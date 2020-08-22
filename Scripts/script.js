var scream = document.querySelector('.scream');
var stook = document.querySelector('.stook');
var tresk = document.querySelector('.tresk');
var cracks = document.querySelector('.cracks');
var door = document.querySelector('.door');
var screamer = document.querySelector('.screamer');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer')
console.log(cracks);
var clicks = 0;

door.addEventListener("click", function () {
    clicks = clicks + 1;
    console.log(clicks);
    if (clicks == 1) {
        stook.play();
    } else if (clicks == 2) {
        door.classList.add('tremor');
        cracks.classList.remove('visually-hidden');
        tresk.play();
    } else if (clicks == 3) {
        scream.play();
        screamer.classList.remove('visually-hidden');
        door.classList.remove('tremor');
        cracks.classList.add('visually-hidden');
        screamer.classList.add('tremor');
        setTimeout(function () {
            screamer.classList.add('visually-hidden');
        }, 2500)
        clicks = 0;
    };

});