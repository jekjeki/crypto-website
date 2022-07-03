let divmenu = document.querySelector('.menu');
let btnmenus = document.getElementsByClassName('btn-menu');

for(let i=0; i<btnmenus.length;i++){
    btnmenus[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active','');
        this.className += ' active';
    })
}

//countdown 
const countdown = () => {
    const date = new Date('May 17, 2024 14:00:00').getTime()
    const today = new Date().getTime()
    const gap = date - today

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour)/minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerHTML = textDay

    document.querySelector('.hour').innerHTML = textHour

    document.querySelector('.minute').innerHTML = textMinute

    document.querySelector('.second').innerHTML = textSecond
    
}

setInterval(countdown, 1000)