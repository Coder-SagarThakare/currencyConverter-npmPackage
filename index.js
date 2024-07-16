import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_xQ6eAIlbacfPhPhy7A9VzNwdpflZttO1dDhM98fi"
);

console.log("running npm package");

export async function converteCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  return res.data[toCurrency] * units;
}

// let b= await converteCurrency("USD", "INR", 1)
// console.log(b);
