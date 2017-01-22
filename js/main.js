(function() {
    new WOW().init()
    animateBanner()
    animateHeader()
})()

var supportedGameClasses = [
    "Minecraft",
    "CounterStrike",
    "Ark",
    "Gaming"
]

// replace the previous classname with the next one in the array
function animateBanner() {
    var currentGame = 0;
    var previousGame = 0;
    var bannerAnimate = setInterval(function () {
        var element = document.getElementsByClassName('rtate')[0]

        if (!element.className.includes(supportedGameClasses[previousGame]))
            element.className += ` ${supportedGameClasses[currentGame]}`
        else
             element.className = element.className.replace(supportedGameClasses[previousGame], supportedGameClasses[currentGame])

        previousGame = currentGame
        currentGame = (currentGame < supportedGameClasses.length - 1) ? ++currentGame : clearInterval(bannerAnimate)
    }, 3000)
}

function animateGlass() {
    var glass = document.getElementsByClassName('logo-hover')[0];
}

function animateHeader() {
    particlesJS.load('GameOnTheRocks', 'js/particlesjs-config.json', function() {
      console.log('particles.js loaded - callback');
    });
}
