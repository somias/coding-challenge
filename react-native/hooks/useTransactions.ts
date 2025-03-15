import { API_URLS } from "@/config/api-config";
import { useQuery } from "@tanstack/react-query";
import { calculateBalance, groupTransactionsByDay } from "@/utils";
import { useMemo } from "react";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  createdAt: string;
  isExpense: boolean;
}

async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch(API_URLS.TRANSACTIONS);
  if (!response.ok) {
    throw new Error("Error while fetching transactions");
  }
  const data = await response.json();

  const transactions = data.map((item: Transaction) => ({
    ...item,
    amount: Number(item.amount),
  }));

  return transactions.sort(
    (a: Transaction, b: Transaction) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function useTransactions() {
  const query = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const balance = useMemo(
    () => calculateBalance(query.data || []),
    [query.data]
  );

  const groupedTransactions = useMemo(
    () => groupTransactionsByDay(query.data ?? []),
    [query.data]
  );

  return {
    ...query,
    balance,
    groupedTransactions,
  };
}
