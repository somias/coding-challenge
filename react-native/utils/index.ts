import { Transaction } from "@/hooks/useTransactions";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
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

export const calculateBalance = (data: Transaction[]) => {
  return data.reduce((total: number, transaction: Transaction) => {
    return transaction.isExpense
      ? total - transaction.amount
      : total + transaction.amount;
  }, 0);
};
