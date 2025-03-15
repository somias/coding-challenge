import { Link } from "expo-router";
import { Text, View, ActivityIndicator } from "react-native";
import { useTransactions } from "@/hooks/useTransactions";
import { formatDate } from "@/utils";

export default function RecentTransactions() {
  const { data, isLoading } = useTransactions();

  const recentTransactions = data ? data.slice(0, 3) : [];

  return (
    <View className="border rounded-md p-4 dark:border-gray-700 dark:bg-gray-800 light:border-gray-200 light:bg-gray-50">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-medium dark:text-gray-200 light:text-gray-800">
          Recent transactions
        </Text>
        <Link
          href="/transactions"
          className="text-blue-500 items-center text-sm"
        >
          See all
        </Link>
      </View>

      {isLoading ? (
        <View className="items-center py-4">
          <ActivityIndicator size="small" color="#3b82f6" />
          <Text className="mt-2 text-sm text-gray-500">
            Loading transactions...
          </Text>
        </View>
      ) : (
        <View className="space-y-3">
          {recentTransactions.map((transaction) => (
            <View
              key={transaction.id}
              className="flex-row justify-between items-center p-2 rounded-md dark:bg-gray-700 light:bg-gray-100"
            >
              <View>
                <Text className="font-medium dark:text-gray-300 light:text-gray-700">
                  {transaction.name}
                </Text>
                <Text className="text-xs text-gray-500">
                  {formatDate(transaction.createdAt)}
                </Text>
              </View>
              <Text
                className={`font-medium ${
                  transaction.isExpense ? "text-orange-500" : "text-green-500"
                }`}
              >
                {transaction.isExpense ? "-" : "+"}
                {transaction.amount}€
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Show a message if there are no transactions */}
      {!isLoading && recentTransactions.length === 0 && (
        <View className="py-4 items-center">
          <Text className="text-gray-500">No recent transactions</Text>
        </View>
      )}
    </View>
  );
}
