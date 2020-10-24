//let botao = document.querySelector('.menu-principal__btn')
//let menuPrincipal = document.querySelector('.menu-principal');

//botao.addEventListener("click", abreFechaMenu);

//function abreFechaMenu(evento){
//    menuPrincipal.classList.toggle('menu-principal--fechado');
//}

// Jquerys
$(document).ready(function(){
    //Botão do menu
    $('.menu-principal__btn').click(function (){
        $('.menu-principal').toggleClass('menu-principal--fechado')
    });

    //slide Depoimentos

    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    //Validação do Formulário
    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            observacoes: 'required'
        },
        messages: {
            nome: "Por favor preencha o campo nome",
            email: {
                required: 'Por favor preencha o email.',
                email: 'Por favorpreencha um email valido'
            },
            mensagem: "Por favor preencha o campo mensagem"
        }
    });
});
