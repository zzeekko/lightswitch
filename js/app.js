// class LightSwitch {
//     constructor() {
//     }
    
    
    
// }
const switchBtn1 = document.getElementById('switchBtn1')
const lightText = document.getElementById('lightText')
let bgColor = document.getElementById('bgColor')
const bgWhite = bgColor.style.backgroundColor = "white";
const bgBlack = bgColor.style.backgroundColor = "black";
let isLightOn = false

console.log(isLightOn);


if (isLightOn = false) {
    let bgColor = bgBlack
} else {
    let bgColor = bgWhite
}

function changeLight() {
    if (isLightOn = true) {
        isLightOn = false
        lightText.innerText = 'The light is off'
        console.log(isLightOn)
    } else {
        isLightOn = true
        lightText.innerText = 'The light is on'
        console.log(isLightOn)
    // } else {
    //     console.log('error')
    // }
}
}


switchBtn1.addEventListener('click', ()=> {
    // console.log('clicked');
    changeLight()
})


// bg-light bg-dark