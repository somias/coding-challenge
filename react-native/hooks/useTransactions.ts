import { API_URLS } from "@/config/api-config";
import { useQuery } from "@tanstack/react-query";
import { calculateBalance } from "@/utils";
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

  return data.map((item: Transaction) => ({
    ...item,
    amount: Number(item.amount),
  }));
}

export function useTransactions() {
  const query = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  const balance = useMemo(
    () => calculateBalance(query.data || []),
    [query.data]
  );

  return {
    ...query,
    balance,
  };
}
