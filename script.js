function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}   

//LÓGICA DA ANIMAÇÃO
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
//      3,1 - Verificar a distância da barra de scroll e o topo do site
//      3,2 - Verificar se a distância anterior + offset é maior do que a distância entre o elemento e o topo da página
//      3,3 - Se verdadeiro, adicionar a classe de animação, remover se for falso
// 4 - Ativar a função de animação toda vez que o usuário utilizar o scroll
// 5 - Otimizar ativação

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const  target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 100));
}
