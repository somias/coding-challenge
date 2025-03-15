export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleDateString(undefined, options);
};
export const formatAmount = (amount: number | string): string => {
  return parseFloat(amount.toString()).toFixed(2);
};
