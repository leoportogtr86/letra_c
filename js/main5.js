let cavalo = document.querySelector('#cavalo')
let jogo = document.querySelector('#jogo')
let bola = document.querySelector('#bola')
let luva = document.querySelector('#luva')



var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    jogo.onclick = function () {

        sampler.triggerAttack('C#3')
        jogo.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            jogo.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    bola.onclick = function () {

        sampler.triggerAttack('C#3')
        bola.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            bola.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    luva.onclick = function () {

        sampler.triggerAttack('C#3')
        luva.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            luva.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    cavalo.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        cavalo.classList.add('animate__flash')

        setTimeout(function () {
            cavalo.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q6.html'
            
        }, 2000)
        
    }
}).toDestination()