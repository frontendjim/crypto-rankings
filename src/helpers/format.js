export const formatCurrency = num => {
  const parsed = parseFloat(num).toFixed(2);

  return parsed.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
