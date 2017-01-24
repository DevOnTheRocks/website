(function() {
    new WOW().init()
    animateBanner()
    animateHeader()
    animateNavLinks()
    animateServers()
})()

var supportedGameClasses = [
    "Minecraft",
    "CounterStrike",
    "Ark",
    "Gaming"
]

function animateNavLinks() {
    $('body').ready(function() {
        $('.navbar-nav>li>a').each(function(index) {
            if (this.href.indexOf('#') > 0) {
                var sectionId = this.href.substring(this.href.indexOf('#')+1)

                this.addEventListener('click', function(e) {
                    e.preventDefault()

                    $('html, body').animate({
                        scrollTop: $('#'+sectionId).offset().top - 100
                    }, 1000)
                })
            }
        })
    })
}

// replace the previous classname with the next one in the array
function animateBanner() {
    var currentGame = 0
    var previousGame = 0
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
    var glass = document.getElementsByClassName('logo-hover')[0]
}

function animateHeader() {
    particlesJS.load('GameOnTheRocks', 'js/particlesjs-config.json')
}

function animateServers() {
    var servers = document.getElementsByClassName('game')

    $('.game').click(function() {
        $('.game').addClass('animated hinge');
    })

    for (var i = 0; i < servers.length; i++) {
        servers[i].addEventListener('click', function(e) {
            // this.parentNode.className = this.parentNode.className.replace('col-sm-4', 'col-sm-12')
            // this.parentNode.className = this.parentNode.className.replace('col-md-offset-4', '')
        })
    }
}
