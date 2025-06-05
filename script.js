const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900,
};

function convert() {
    const from = document.getElementById('fromCurrency').value.toUpperCase();
    const to = document.getElementById('toCurrency').value.toUpperCase();
    const amount = parseFloat(document.getElementById('amount').value);

    const result = document.getElementById('result');

    if (!currencies[from] || !currencies[to]) {
        result.textContent = "Currency not found!";
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        result.textContent = "Invalid amount!";
        return;
    }

    const converted = (amount * currencies[to]) / currencies[from];
    result.textContent = `Converted amount: ${converted.toFixed(2)} ${to}`;
}


