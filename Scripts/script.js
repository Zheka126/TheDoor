//аудио
var scream = document.querySelector('.scream');
var stook1 = document.querySelector('.stook1');
var stook2 = document.querySelector('.stook2');
var stook3 = document.querySelector('.stook3');
var tresk = document.querySelector('.tresk');

//объекты страницы
var door = document.querySelector('.door');
var screamer = document.querySelector('.screamer');
var cracks = document.querySelector('.cracks');
var footer = document.querySelector('.footer')
var clicks = 0;

door.addEventListener("click", function () {
    clicks++;
    console.log(clicks);

    switch (clicks) {
        case 1:
            stook1.play();
            break;

        case 2:
            stook2.play();
            break;

        case 3:
            stook3.play();
            break;

        case 4:
            door.classList.add('tremor');
            cracks.classList.remove('visually-hidden');
            tresk.play();
            break;

        case 5:
            scream.play();
            screamer.classList.remove('visually-hidden');
            door.classList.remove('tremor');
            cracks.classList.add('visually-hidden');
            screamer.classList.add('tremor');

            setTimeout(function () {
                screamer.classList.add('visually-hidden');
            }, 2500)
            clicks = 0; //Внутри последнего случая обязательно нужно обнулять значение этого счётчика
            break;
    };

});