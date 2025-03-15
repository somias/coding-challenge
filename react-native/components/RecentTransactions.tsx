import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useTransactions } from "@/hooks/useTransactions";
import { formatDate } from "@/utils";
import Skeleton from "./shared/Skeleton";
import ShowFullTransactions from "./ShowFullTransactions";
import { SafeAreaView } from "react-native-safe-area-context";
import Amount from "./Amount";

interface RecentTransactionsProps {
  showFull?: boolean;
}

export default function RecentTransactions({
  showFull = false,
}: RecentTransactionsProps) {
  const { data, isLoading } = useTransactions();

  if (isLoading) {
    return <Skeleton />;
  }

  const recentTransactions = data ? data.slice(0, 3) : [];

  return (
    <SafeAreaView>
      <View className="">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-medium dark:text-gray-200 light:text-gray-800">
            Recent transactions
          </Text>

          {!showFull ? (
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
            {recentTransactions.map((transaction) => (
              <View
                key={transaction.id}
                className="flex-row justify-between items-center p-2 rounded-md"
              >
                <View>
                  <Text className="font-medium dark:text-gray-300 light:text-gray-700">
                    {transaction.name}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {formatDate(transaction.createdAt)}
                  </Text>
                </View>
                <Amount
                  isExpense={transaction.isExpense}
                  amount={transaction.amount}
                />
              </View>
            ))}
          </View>
        ) : (
          <ShowFullTransactions />
        )}

        {/* Show a message if there are no transactions */}
        {!isLoading && recentTransactions.length === 0 && (
          <View className="py-4 items-center">
            <Text className="text-gray-500">No recent transactions</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
