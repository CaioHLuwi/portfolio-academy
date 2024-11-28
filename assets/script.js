import Typewritter from 'typewritter-effect/dist/core';

const titleArea = document.querySelector('#titleArea');

var typeWritter = new Typewritter(titleArea, {
    loop: true,
    delay: 75,
});

typeWritter.typeString('Teste!')
    .pauseFor(2500)
    .deleteAll()