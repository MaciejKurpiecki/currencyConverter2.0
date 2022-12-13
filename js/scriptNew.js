{
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

        resultElement.innerText =result <= 0 ?  "N/A" : `${plnAmount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
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

    const onButtonClick  = (formElement, modeButton) => {
        changeResultButtonDisplayed();
        changeModeButtonText(formElement, modeButton);
    }

    const changeResultButtonDisplayed = () => {
        const resultButton = document.querySelector(".js-resultButton");

        resultButton.toggleAttribute("hidden");
    };

    const changeModeButtonText = (formElement, modeButton) => {
        formElement.classList.toggle("js-input");
        formElement.classList.contains("js-input") ? modeButton.innerText = "Use submit mode" : modeButton.innerText = "Use input mode";
    };

    const init = () => {
        const modeButton = document.querySelector(".js-modeButton");
        const formElement = document.querySelector(".js-submit");

        formElement.addEventListener("submit", onFormSubmit);

        formElement.addEventListener("input", (event) => {
            if(formElement.classList.contains("js-input")) {
                onFormSubmit(event);
            }
        });

        modeButton.addEventListener("click", () => {
            onButtonClick(formElement, modeButton);
        });
    };

    init();
}