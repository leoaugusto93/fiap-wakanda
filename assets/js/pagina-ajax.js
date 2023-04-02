//Carrega o conteúdo das páginas dentro da div#conteudo    
$('#cliente_cadastro').click( function() {

    //Pega o valor do atributo href da âncora clicada
    var href = $(this).attr('href');
    $('#cliente-conteudo').load(href);
    return false;
});