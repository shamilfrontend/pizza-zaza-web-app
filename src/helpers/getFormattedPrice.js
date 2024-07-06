export const getFormattedPrice = (price) => {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB'
  });

  return formatter.format(Math.trunc(price * 100) / 100);
};
