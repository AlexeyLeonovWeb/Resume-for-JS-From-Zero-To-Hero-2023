let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

menu.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursorOne = document.querySelector('.cursor-1');
let cursorTwo = document.querySelector('.cursor-2');

window.onmousemove = (a) =>{
    cursorOne.style.top = a.pageY + 'px'
    cursorOne.style.left = a.pageX + 'px'
    cursorTwo.style.top = a.pageY + 'px'
    cursorTwo.style.left = a.pageX + 'px'
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursorOne.classList.add('active');
        cursorTwo.classList.add('active')
    }

    links.onmouseleave = () =>{
        cursorOne.classList.remove('active');
        cursorTwo.classList.remove('active')
    }
});
