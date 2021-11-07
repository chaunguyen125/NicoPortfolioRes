
var textChange = document.querySelector('.text-intro-change');
// console.log(textChange);
// textChange.innerText = 'write'
var backToTop = document.querySelector('.back-to-top');
console.log(backToTop)

function start() {
    textChanging();
    handleBackToTop();
}

start();

function textChanging() {
    function sleep(ms) {

        return new Promise(function (resolve) {

            setTimeout(resolve, ms);

        });

    }
    if (textChange.innerText == 'write') {
        sleep(1500)
            .then(function () {
                // textChange.classList.remove('fadeOut');
                textChange.classList.add('fadeIn')
                textChange.innerText = 'learn';
                return sleep(1500);
            })

            .then(function(){
                // textChange.classList.add('fadeOut');

            })

            .then(function () {
                textChange.classList.remove('fadeIn');
            })

            .then(textChanging);

    }

    else {
        sleep(1500)
            .then(function () {
                // textChange.classList.remove('fadeOut');

                textChange.classList.add('fadeIn');
                textChange.innerText = 'write';
                return sleep(1500);
            })

            .then(function () {
                textChange.classList.remove('fadeIn');
                // textChange.classList.add('fadeOut');

            })

            .then(textChanging);

    }


}


function handleBackToTop() {
    window.onscroll = function(e) {
        console.log(e.target)
    }
}
