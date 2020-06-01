let copo = document.querySelector('#copo')
let mola = document.querySelector('#mola')
let abelha = document.querySelector('#abelha')
let bicicleta = document.querySelector('#bicicleta')



var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    mola.onclick = function () {

        sampler.triggerAttack('C#3')
        mola.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            mola.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    abelha.onclick = function () {

        sampler.triggerAttack('C#3')
        abelha.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            abelha.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    bicicleta.onclick = function () {

        sampler.triggerAttack('C#3')
        bicicleta.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            bicicleta.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    copo.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        copo.classList.add('animate__flash')

        setTimeout(function () {
            copo.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q8.html'
            
        }, 2000)
        
    }
}).toDestination()