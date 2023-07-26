function converterMoeda() {
    let quantiaEmReal = parseFloat(document.querySelector('#quantiaEmReal').value);
    let moeda = document.querySelector('#moeda').value;
    let taxaDeConversao;

    switch (moeda) {
        case 'dolar':
            taxaDeConversao = 4.73;
            break;
        case 'euro':
            taxaDeConversao = 5.24;
            break;
        case 'iene':
            taxaDeConversao = 0.034;
            break;
        case 'peso':
            taxaDeConversao = 0.017;
            break;
        default:
            taxaDeConversao = 1;
            break;
    }

    let quantiaConvertida = quantiaEmReal / taxaDeConversao;
    document.querySelector('#quantiaConvertida').value = quantiaConvertida.toFixed(2);
}

document.querySelector('#quantiaEmReal').addEventListener('input', converterMoeda);
document.querySelector('#moeda').addEventListener('change', converterMoeda);

converterMoeda();