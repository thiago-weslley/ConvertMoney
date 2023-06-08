const convertButton = document.querySelector('#convert-button');
const selectConvertFor = document.querySelector('#convert-for');

const convertValues = () => {
    const inputConversionValue = document.querySelector('#conversion-value').value;
    const inputConversionResult = document.querySelector('#conversion-result');

    if (selectConvertFor.value === 'dolar'){
        const dolarToday = 4.92;
        inputConversionResult.value = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputConversionValue / dolarToday);
    }

    if (selectConvertFor.value === 'euro'){
        const euroToday = 5.30;
        inputConversionResult.value = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputConversionValue / euroToday);
    }
}

convertButton.addEventListener('click', convertValues);

// const selectConvertFor = document.querySelector('#convert-for');


// selectConvertFor.addEventListener('change', () => console.log(selectConvertFor.value))