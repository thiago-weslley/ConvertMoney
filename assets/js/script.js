const convertButton = document.querySelector('#convert-button');
const selectConvertFor = document.querySelector('#convert-for');
const clearButton = document.querySelector('#clear-button');

const convertValues = async () => {
    const inputConversionValue = document.querySelector('#conversion-value').value;
    const inputConversionResult = document.querySelector('#conversion-result');

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL').then(response => response.json());

    const dolarToday = data.USDBRL;
    const euroToday = data.EURBRL;
    const libraToday = data.GBPBRL;
    const bitcoinToday = data.BTCBRL;

    if (selectConvertFor.value === 'dolar') {
        inputConversionResult.value = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputConversionValue / dolarToday.high);
    }

    if (selectConvertFor.value === 'euro') {
        inputConversionResult.value = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputConversionValue / euroToday.high);
    }

    if (selectConvertFor.value === 'libra') {
        inputConversionResult.value = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputConversionValue / libraToday.high);
    }

    if (selectConvertFor.value === 'bitcoin') {
        inputConversionResult.value = (inputConversionValue / bitcoinToday.high).toFixed(8) + " BTC";
    }
}

const changeSelectConvertFor = () => { convertValues() }

const clearInput = () => {
    const inputConversionValue = document.querySelector('#conversion-value');
    const inputConversionResult = document.querySelector('#conversion-result');

    inputConversionValue.value = '';

    if (selectConvertFor.value === 'dolar') {
        inputConversionResult.value = '$0.00';
    }

    if (selectConvertFor.value === 'euro') {
        inputConversionResult.value = '€0.00';
    }

    if (selectConvertFor.value === 'libra') {
        inputConversionResult.value = '£0.00';
    }

    if (selectConvertFor.value === 'bitcoin') {
        inputConversionResult.value = '0.00000000 BTC';
    }

}

clearButton.addEventListener('click', clearInput);

selectConvertFor.addEventListener('change', changeSelectConvertFor)

convertButton.addEventListener('click', convertValues);