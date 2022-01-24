let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains3 = document.querySelector('#mountains3')
let mountains4 = document.querySelector('#mountains4')
let river = document.querySelector('#river')
let boat = document.querySelector('#boat')
let text = document.querySelector('.text')

window.onscroll = function(){
    console.log(scrollY)
    const value = scrollY  
    stars.style.left = value + 'px'
    mountains3.style.top = value * 1.5 + "px"
    mountains4.style.top = value * 1.2 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 2 + "px"
    moon.style.top = value * 3+ "px"
    text.style.fontSize = value * 0.5 + "px"
    if (scrollY >= 80){
        text.style.fontSize = 80 + "px"
    }if (scrollY >= 460){
        text.style.display = "none";
    }else{
        text.style.display = "block"
    }
    if(scrollY >= 156){
        document.querySelector('.main').style.background = "linear-gradient(#3bb5ff,#3C2C6C)"

    }else{
        document.querySelector('.main').style.background = "linear-gradient(#441454,#3C2C6C)"

    }
}