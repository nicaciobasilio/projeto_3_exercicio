$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, digite o assunto da mensagem',
            nome: 'Por favor, digite seu nome completo'
        }
    })
})