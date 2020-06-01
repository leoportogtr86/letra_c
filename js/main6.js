let cavalo = document.querySelector('#cavalo')
let vaca = document.querySelector('#vaca')




var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    vaca.onclick = function () {

        sampler.triggerAttack('C#3')
        vaca.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            vaca.classList.remove('animate__shakeX')
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

            window.location = 'q7.html'
            
        }, 2000)
        
    }
}).toDestination()