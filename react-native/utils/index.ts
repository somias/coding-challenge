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
interface DailyTransactions {
  date: string;
  transactions: Transaction[];
}

export const groupTransactionsByDate = (
  transactions: Transaction[]
): DailyTransactions[] => {
  const groups: { [date: string]: Transaction[] } = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.createdAt).toISOString().split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
  });

  return Object.entries(groups)
    .map(([date, transactions]) => ({
      date,
      transactions: transactions.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      ),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
};
