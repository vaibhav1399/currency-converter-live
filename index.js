import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_nnlM4HHKpqrFUvXy4ngSRBrYmtybgTsAA3qV0G5I');

currency_Converter("USD", "INR", 5);

export async function currency_Converter(fromCurrency, toCurrency, units){

    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    // console.log(multiplier*units);
    
    return multiplier*units;
}



