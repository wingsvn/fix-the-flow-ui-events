let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// mijn animaties 


//1. on click - change of color

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', function clickhandler() {
  frontend.classList.toggle('color')
});

//2. doubleclick - scale

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', function scalehandler(){
  design.classList.toggle('scale')
});

//3. mouseover - rotate

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('mouseover', rotatehandler);
function rotatehandler() {
  and.classList.toggle('rotate')
};

//4. keydown - shake

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('keydown', shakehandler);
function shakehandler(tab) {
  development.classList.toggle('shake')
};

//5. click - skew

let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', skewhandler);
function skewhandler() {
  sprint5.classList.toggle('skew')
};

//6. doubleclick - bounce

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('dblclick', translatehandler);
function translatehandler() {
  fix.classList.toggle('translate')
};

//7. click - jump jump

let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', jumpjumphandler);
function jumpjumphandler() {
  the.classList.toggle('jumpjump')
};

//8. mouseover - change of colors

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('mouseover', colorchangehandler);
function colorchangehandler() {
  flow.classList.toggle('background')
};

//9. keydown - borders

let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('keydown', borderhandler);
function borderhandler() {
  user.classList.toggle('borders')
};

//10. click - flip
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', fliphandler);
function fliphandler() {
  interface.classList.toggle('flip')
};
