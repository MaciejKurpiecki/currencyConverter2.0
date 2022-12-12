{
    {
        const submitElement = document.querySelector(".js-submit");
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
        {
            const init = () => {
                submitElement.addEventListener("submit", onFormSubmit);
            };
            init();

        }
    }
    {
        const submitElement = document.querySelector(".js-submit");
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
            const resultElement = document.querySelector(".js-secondaryResult");
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
        {
            const init = () => {
                submitElement.addEventListener("input", onFormSubmit);
            };
            init();

        }
    }
}
{

    const init = () => {
        const modeButton = document.querySelector(".js-modeButton");
        modeButton.addEventListener("click", changeInputMode);
        modeButton.addEventListener("click", hideElement);


    }
    const changeInputMode = () => {
        const inputSubmitMode = document.querySelector(".js-form");
        const modeButton = document.querySelector(".js-modeButton");
        const submitResult = document.querySelector(".js-resultParagraph");
        const inputResult = document.querySelector(".js-secondaryResultParagraph");

        inputSubmitMode.classList.toggle("js-submit");
        inputSubmitMode.classList.toggle("js-input");

        inputSubmitMode.classList.contains('js-submit') ? modeButton.innerText = "Use input mode" : modeButton.innerText = "Use submit mode";

        inputSubmitMode.classList.contains('js-submit') ? inputResult.toggleAttribute("hidden") : inputResult.toggleAttribute("hidden")

        inputSubmitMode.classList.contains('js-input') ? submitResult.toggleAttribute("hidden") : submitResult.toggleAttribute("hidden")

    }
    init();
}