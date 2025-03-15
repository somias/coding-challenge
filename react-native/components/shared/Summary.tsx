import { Text, View } from "react-native";
import Skeleton from "./Skeleton";
import { useTransactions } from "@/hooks/useTransactions";

interface SummaryProps {
  expandSummary?: boolean;
}

export default function Summary({ expandSummary = false }: SummaryProps) {
  const { balance, totalIncome, totalExpenses, isLoading } = useTransactions();

  return (
    <View>
      <Text className="text-lg font-medium mb-3 dark:text-gray-200 light:text-gray-800">
        Summary
      </Text>
      {isLoading ? (
        <Skeleton className="h-12" />
      ) : (
        <View className="rounded-md overflow-hidden mb-4 border dark:border-gray-700 light:border-gray-200">
          {expandSummary ? (
            <>
              <View className="flex-row p-4 flex justify-between items-center bg-green-50 dark:bg-green-900/20">
                <Text className="dark:text-gray-200 light:text-gray-700">
                  Total Income
                </Text>
                <Text className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {totalIncome.toFixed(2)}€
                </Text>
              </View>

              <View className="flex-row p-4 flex justify-between items-center bg-red-50 dark:bg-red-900/20 border-t border-b dark:border-gray-700 light:border-gray-200">
                <Text className="dark:text-gray-200 light:text-gray-700">
                  Total Expenses
                </Text>
                <Text className="text-lg font-semibold text-red-600 dark:text-red-400">
                  {totalExpenses.toFixed(2)}€
                </Text>
              </View>
            </>
          ) : null}

          <View className="flex-row p-4 flex justify-between items-center bg-slate-50 dark:bg-gray-800">
            <Text className="dark:text-gray-200 light:text-gray-700 font-medium">
              Balance
            </Text>
            <Text className="text-xl font-semibold dark:text-white light:text-black">
              {balance}€
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
