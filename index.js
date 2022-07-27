function consultarCep() {
    let cep = document.querySelector('#cep').value
    let localizacao = document.querySelector('#localizacao')
    let url = `https://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            localizacao.innerHTML = `${response}`
        }
    })
}