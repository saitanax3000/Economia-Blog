var apiUrl = "https://open.er-api.com/v6/latest/USD"; // API de ExchangeRate-API (dólar estadounidense como moneda base)

function fetchExchangeRate() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var exchangeRateData = data.rates;

            var headerElement = document.getElementById("exchange-rate-header");
            headerElement.innerHTML = "";

            var currencies = ["USD", "EUR", "BRL", "GBP", "JPY", "CHF", "CAD", "AUD"]; // Principales divisas que deseas mostrar

            // Add text
            var text = "Valor dolar hoy: " + " ";
            var textElement = document.createElement("a");
            textElement.innerHTML = text;
            textElement.style.marginRight = "10px";

            var headerElement = document.getElementById("exchange-rate-header");
            headerElement.appendChild(textElement);
            currencies.forEach(currency => {
                var rate = exchangeRateData[currency];

                // Add PNG icon
                var iconUrl = "templates/icons/" + currency + ".png";
                var iconElement = document.createElement("img");
                iconElement.src = iconUrl;
                iconElement.classList.add("currency-icon");

                var currencyContainer = document.createElement("div");
                currencyContainer.classList.add("currency-container");

                var currencyContent = document.createElement("div");
                currencyContent.innerHTML = currency + ": " + rate.toFixed(2);

                currencyContainer.appendChild(iconElement);
                currencyContainer.appendChild(currencyContent);

                headerElement.appendChild(currencyContainer);
            });

            animateCurrencies();
        })
        .catch(error => {
            console.log("Error al obtener las tasas de cambio: " + error);
        });
}

function animateCurrencies() {
    var currencyContainers = document.getElementsByClassName("currency-container");

    Array.from(currencyContainers).forEach((container, index) => {
        container.style.opacity = 1;
        container.style.animation = "scroll-right 20s linear infinite";
        container.style.animationDelay = (index * 2) + "s"; // Retraso gradual para cada elemento de moneda
    });
}
fetchExchangeRate();

console.log("termino script conversor");