function convert(currency) {
    let amount;
    let rate;
    let resultElement;

    if (currency === 'btc') {
        amount = document.getElementById('btc').value;
        rate = 337888.09;
        resultElement = document.getElementById('btc-result');
    } else if (currency === 'eth') {
        amount = document.getElementById('eth').value;
        rate = 17963.20;
        resultElement = document.getElementById('eth-result');
    }

    let result = amount * rate;
    resultElement.innerText = `${result.toFixed(2)} BRL`;
}
