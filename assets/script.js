import Typed from 'typed.js';
var paragraph = document.querySelector('#titleArea')

var typed = new Typed(paragraph, {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
})