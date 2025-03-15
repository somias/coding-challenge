import { API_URLS } from "@/config/api-config";
import { useQuery } from "@tanstack/react-query";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  createdAt: Date;
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
    createdAt: new Date(item.createdAt),
  }));
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
}
