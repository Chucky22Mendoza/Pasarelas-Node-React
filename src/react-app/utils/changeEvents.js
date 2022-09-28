import countries from './countries';
const change = [];

const prices = (codeCountry) => {
    const typePlan = document.getElementById("selectorTypePlan").value;
    document.getElementById("selectorTypeCoin").value = codeCountry;

    for (const iterator of document.getElementsByName("lblCoin")) {
        iterator.innerText = countries[codeCountry].coin;
    }
    for (const iterator of document.getElementsByName("plusValue")) {
        if (typePlan == "month") {
            iterator.innerText = countries[codeCountry].plusMonth;
        }
        if (typePlan == "anual") {
            iterator.innerText = countries[codeCountry].plusYear;
        }
    }
    for (const iterator of document.getElementsByName("premiumValue")) {
        if (typePlan == "month") {
            iterator.innerText = countries[codeCountry].premiumMonth;
        }
        if (typePlan == "anual") {
            iterator.innerText = countries[codeCountry].premiumYear;
        }
    }
};

const country = (index) => {
    const backPriceCountry = document.getElementsByClassName("back-price-country");
    const selectorTypeCountry = document.getElementsByName("selector-type-country");
    let widthOption = 0;
    let sumTransform = 0;
    for (const iterator of selectorTypeCountry) {
        let countOpt = 0;
        sumTransform = 0;
        for (const iteratorOpt of iterator.children) {
            iteratorOpt.classList.remove('active');
            if (countOpt < index) {
                sumTransform += parseFloat(iteratorOpt.clientWidth);
            }
            if (countOpt == index) {
                widthOption = parseFloat(iteratorOpt.clientWidth);
                iteratorOpt.classList.add('active');
            }
            countOpt++;
        }
    }

    for (const iterator of backPriceCountry) {
        iterator.setAttribute('style', `transform: translate(${sumTransform/10}rem); width: ${widthOption/10}rem;`);
    }
};

const plan = (index, type) => {
    const backPricePlan = document.getElementsByClassName("back-price-plan");
    const selectorTypePlan = document.getElementsByName("selector-type-plan");
    document.getElementById('selectorTypePlan').value = type;

    for (const iterator of document.getElementsByName("lblTime")) {
        iterator.innerText = type == "month" ? 'al mes' : 'al año';
    }
    let widthOption = 0;
    let sumTransform = 0;
    for (const iterator of selectorTypePlan) {
        let countOpt = 0;
        sumTransform = 0;
        for (const iteratorOpt of iterator.children) {
            iteratorOpt.classList.remove('active');
            if (countOpt < index) {
                sumTransform += parseFloat(iteratorOpt.clientWidth);
            }
            if (countOpt == index) {
                widthOption = parseFloat(iteratorOpt.clientWidth);
                iteratorOpt.classList.add('active');
            }
            countOpt++;
        }
    }

    for (const iterator of backPricePlan) {
        iterator.setAttribute('style', `transform: translate(${sumTransform/10}rem); width: ${widthOption/10}rem;`);
    }
};

change.prices = prices;
change.country = country;
change.plan = plan;

export default change;