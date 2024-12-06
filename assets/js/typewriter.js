let logoArea = document.querySelector('#logoArea');

var typewriterLogo = new Typewriter(logoArea, {
    loop: false,
    delay: 75,
});

typewriterLogo
    .typeString('.dev')
    .pauseFor(1000)
    .typeString(': Portfólio')
    .pauseFor(4000)
    .deleteChars(14)
    .typeString('dev')
    .start();

let titleArea = document.querySelector('#titleArea');

var typewriterTitle = new Typewriter(titleArea, {
    loop: false,
    delay: 75,
});

typewriterTitle
    .typeString('Desenvolvedor Front-end')
    .pauseFor(2500)
    .deleteChars(23)
    .typeString('Analista de Suporte')
    .pauseFor(1000)
    .deleteChars(19)
    .typeString('Desenvolvedor Front-end')
    .start();

