import { Link } from "expo-router";
import { Text, View } from "react-native";
import Skeleton from "./shared/Skeleton";
import TransactionItem from "./TransactionItem";
import ShowFullTransactions from "./ShowFullTransactions";
import EmptyData from "./EmptyData";

import { useTransactions } from "@/hooks/useTransactions";

interface RecentTransactionsProps {
  showFull?: boolean;
}

export default function RecentTransactions({
  showFull = false,
}: RecentTransactionsProps) {
  const { data, isLoading } = useTransactions();

  if (isLoading) {
    return <Skeleton className="h-10" />;
  }

  const newestThreeTransactions = data ? data.slice(0, 3) : [];

  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-medium dark:text-gray-200 light:text-gray-800">
          Recent transactions
        </Text>
        {!showFull && newestThreeTransactions.length ? (
          <Link
            href="/transactions"
            className="text-blue-500 items-center text-sm"
          >
            See all
          </Link>
        ) : null}
      </View>

      {!showFull ? (
        <View className="space-y-3">
          {newestThreeTransactions.map((transaction) => (
            <TransactionItem
              className="flex-row justify-between items-center p-2 rounded-md"
              key={transaction.id}
              id={transaction.id}
              name={transaction.name}
              createdAt={transaction.createdAt}
              isExpense={transaction.isExpense}
              amount={transaction.amount}
              formatDateOptions={{
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }}
            />
          ))}
        </View>
      ) : (
        <ShowFullTransactions />
      )}

      {!isLoading && newestThreeTransactions.length === 0 && <EmptyData />}
    </View>
  );
}
