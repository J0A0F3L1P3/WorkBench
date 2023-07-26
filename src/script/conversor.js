document.querySelector('#quantiaEmReal').addEventListener('input', converterMoeda);
document.querySelector('#moeda').addEventListener('change', converterMoeda);

function converterMoeda() {
    let quantiaEmReal = parseFloat(document.querySelector('#quantiaEmReal').value);
    let moeda = document.querySelector('#moeda').value;

    switch (moeda) {
        case 'dolar':
            quantiaEmReal /= 4.73;
            break;
        case 'euro':
            quantiaEmReal /= 5.24;
            break;
        case 'iene':
            quantiaEmReal /= 0.034;
            break;
        case 'peso':
            quantiaEmReal /= 0.017;
            break;
    }

    document.querySelector('#quantiaConvertida').value = quantiaEmReal.toFixed(2);
}