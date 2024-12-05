let titleArea = document.querySelector('#titleArea');

var typewriter = new Typewriter(titleArea, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('Desenvolvedor Front-end')
    .pauseFor(2500)
    .deleteChars(23)
    .typeString('Analista de Suporte')
    .pauseFor(1000)
    .start();