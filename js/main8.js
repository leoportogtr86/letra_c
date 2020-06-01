let copo = document.querySelector('#copo')
let garfo = document.querySelector('#garfo')




var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    garfo.onclick = function () {

        sampler.triggerAttack('C#3')
        garfo.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            garfo.classList.remove('animate__shakeX')
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

            window.location = 'win.html'
            
        }, 2000)
        
    }
}).toDestination()