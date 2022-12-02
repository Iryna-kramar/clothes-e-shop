const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "UAH",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATER.format(number);
}
