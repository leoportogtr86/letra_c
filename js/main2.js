let casa = document.querySelector('#casa')
let carro = document.querySelector('#carro')




var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    carro.onclick = function () {

        sampler.triggerAttack('C#3')
        carro.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            carro.classList.remove('animate__shakeX')
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

            window.location = 'q3.html'
            
        }, 2000)
        
    }
}).toDestination()