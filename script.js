function validarCartao() {
    const numeroCartao = document.getElementById('numeroCartao').value;
    const bandeira = detectarBandeira(numeroCartao);
    if (bandeira) {
        alert('Cartão válido! Bandeira: ' + bandeira);
    } else {
        alert('Número de cartão inválido.');
    }
}

function detectarBandeira(numero) {
    const regexes = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'Elo': /^((636368)|(438935)|(504175)|(451416)|(636297)|(5067)|(4576)|(4011))\d+$/,
        'HiperCred': /^606282\d{10}(\d{3})?$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/
    };

    for (const [bandeira, regex] of Object.entries(regexes)) {
        if (regex.test(numero)) {
            return bandeira;
        }
    }
    return null;
}