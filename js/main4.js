let circo = document.querySelector('#circo')
let coco = document.querySelector('#coco')




var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    circo.onclick = function () {

        sampler.triggerAttack('C#3')
        circo.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            circo.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

   

    coco.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        coco.classList.add('animate__flash')

        setTimeout(function () {
            coco.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q5.html'
            
        }, 2000)
        
    }
}).toDestination()