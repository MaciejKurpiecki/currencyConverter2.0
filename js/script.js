{
    const formElement = document.querySelector(".js-form");
    const calculateResult = (currency, plnAmount) => {

        const usd = 4.55;
        const eur = 4.69;
        const gbp = 5.41;

        switch (currency) {
            case "USD":
                return plnAmount / usd;

            case "GBP":
                return plnAmount / gbp;

            case "EUR":
                return plnAmount / eur;
        }
    };
    const updateResultText = (plnAmount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        result <= 0 ? resultElement.innerText = "N/A" : resultElement.innerText = `${plnAmount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const plnAmount = +plnElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(currency, plnAmount);

        updateResultText(plnAmount, result, currency);

    };
    const init = () => {

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

}