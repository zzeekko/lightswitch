// class LightSwitch {
//     constructor() {
//     }
    
    
    
// }
const switchBtn1 = document.getElementById('switchBtn1')
const lightText = document.getElementById('lightText')
let bgColor = document.getElementById('bgColor')
const bgWhite = bgColor.style.backgroundColor = "white";
const bgBlack = bgColor.style.backgroundColor = "black";
let isLightOn = true

console.log(isLightOn);


if (isLightOn = true) {
    let bgColor = bgWhite
} else {
    let bgColor = bgBlack
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