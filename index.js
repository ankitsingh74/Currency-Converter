const currencyFirstEl = document.getElementById("currency-first")

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-second")

const worthSecondEl = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("exchange-rate") 

updateRate();

async function updateRate(){
    try {
        exchangeRateEl.innerText = `Loading...`
        await fetch(`https://v6.exchangerate-api.com/v6/dc126c804662afa548325baa/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{
        const rate = data.conversion_rates
        [currencySecondEl.value]
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " "+currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
        });
    } catch (error) {
        exchangeRateEl.innerText = `An error happened, please try again later`
        currencySecondEl.style.display = "none"
        currencyFirstEl.style.display = "none"
        worthSecondEl.style.display = "none"
        worthFirstEl.style.display = "none"
    }

}

currencyFirstEl.addEventListener("change", updateRate)
currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input",updateRate)


