import {gsap} from 'gsap'

window.onload = ()=>{
    gsap.from('.text-banner-animation',{
        x: -100,
        opacity: 0,
        duration: 1,
    })
}