let coco = document.querySelector('#coco')
let rato = document.querySelector('#rato')
let galo = document.querySelector('#galo')
let vela = document.querySelector('#vela')



var sampler = new Tone.Sampler({
	"C3" : "audio/acertou.mp3",
	"C#3" : "audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    rato.onclick = function () {

        sampler.triggerAttack('C#3')
        rato.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            rato.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    galo.onclick = function () {

        sampler.triggerAttack('C#3')
        galo.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            galo.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    vela.onclick = function () {

        sampler.triggerAttack('C#3')
        vela.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            vela.classList.remove('animate__shakeX')
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

            window.location = 'q4.html'
            
        }, 2000)
        
    }
}).toDestination()