function consultarCep() {
    let cep = document.getElementById("cep").value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {

            $('.uf').html(response.uf);
            $('.localidade').html(response.localidade)
            $('.bairro').html(response.bairro)
            $('.logradouro').html(response.logradouro)
            $('.ddd').html(response.ddd)
        }
    })
}