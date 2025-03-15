import { Transaction } from "@/hooks/useTransactions";

export const formatDate = (
  dateString: string,
  options?: Intl.DateTimeFormatOptions,
  localeDate?: boolean
): string => {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  if (localeDate) {
    return date.toLocaleDateString(undefined, options ?? defaultOptions);
  } else {
    return date.toLocaleTimeString(undefined, options ?? defaultOptions);
  }
};

export const formatAmount = (amount: number | string): string => {
  return parseFloat(amount.toString()).toFixed(2);
};

export const calculateFinancialSummary = (data: Transaction[]) => {
  return data.reduce(
    (summary, transaction) => {
      if (transaction.isExpense) {
        return {
          balance: summary.balance - transaction.amount,
          totalIncome: summary.totalIncome,
          totalExpenses: summary.totalExpenses + transaction.amount,
        };
      } else {
        return {
          balance: summary.balance + transaction.amount,
          totalIncome: summary.totalIncome + transaction.amount,
          totalExpenses: summary.totalExpenses,
        };
      }
    },
    { balance: 0, totalIncome: 0, totalExpenses: 0 }
  );
};

export interface DailyTransactions {
  day: string;
  formattedDay: string;
  data: Transaction[];
}

export function groupTransactionsByDay(
  transactions: Transaction[]
): DailyTransactions[] {
  const groupedByDay = new Map<string, Transaction[]>();

  transactions.forEach((transaction) => {
    const date = new Date(transaction.createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateKey = `${year}-${month}-${day}`;

    if (!groupedByDay.has(dateKey)) {
      groupedByDay.set(dateKey, []);
    }

    groupedByDay.get(dateKey)?.push(transaction);
  });

  return (
    Array.from(groupedByDay.entries())
      .map(([day, dayTransactions]) => {
        const [year, month, dayNum] = day.split("-").map(Number);
        const date = new Date(year, month - 1, dayNum);
        const formattedDay = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        return {
          day,
          formattedDay,
          data: dayTransactions,
        };
      })
      // Sort days (newest first)
      .sort((a, b) => {
        const [aYear, aMonth, aDay] = a.day.split("-").map(Number);
        const [bYear, bMonth, bDay] = b.day.split("-").map(Number);
        const dateA = new Date(aYear, aMonth - 1, aDay);
        const dateB = new Date(bYear, bMonth - 1, bDay);
        return dateB.getTime() - dateA.getTime();
      })
  );
}
