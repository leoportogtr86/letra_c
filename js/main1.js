let casa = document.querySelector('#casa')
let gato = document.querySelector('#gato')
let ovo = document.querySelector('#ovo')
let pato = document.querySelector('#pato')



var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    gato.onclick = function () {

        sampler.triggerAttack('C#3')
        gato.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            gato.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    ovo.onclick = function () {

        sampler.triggerAttack('C#3')
        ovo.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            ovo.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    pato.onclick = function () {

        sampler.triggerAttack('C#3')
        pato.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            pato.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    casa.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        casa.classList.add('animate__flash')

        setTimeout(function () {
            casa.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q2.html'
            
        }, 2000)
        
    }
}).toDestination()