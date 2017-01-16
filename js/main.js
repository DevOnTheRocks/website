(function() {
    new WOW().init()
    animateBanner()
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
            element.className += " " + supportedGameClasses[currentGame]
        else
            element.className = element.className.replace(supportedGameClasses[previousGame], supportedGameClasses[currentGame])

        previousGame = currentGame
        currentGame = (currentGame < supportedGameClasses.length - 1) ? ++currentGame : clearInterval(bannerAnimate)
    }, 2000)
}
