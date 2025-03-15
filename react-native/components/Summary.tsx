import { Text, View } from "react-native";
import Skeleton from "./shared/Skeleton";

import { useTransactions } from "@/hooks/useTransactions";

export default function Summary() {
  const { balance, isLoading } = useTransactions();

  return (
    <View>
      <Text className="text-lg font-medium mb-3 dark:text-gray-200 light:text-gray-800">
        Summary
      </Text>

      {isLoading ? (
        <Skeleton className="h-10" />
      ) : (
        <View className="flex-row border rounded-md p-4 mb-4 flex justify-between items-center bg-slate-50 dark:bg-gray-800 dark:border-gray-700 light:border-gray-200">
          <Text className="dark:text-gray-200 light:text-gray-700">
            Balance
          </Text>
          <Text className="text-xl font-semibold dark:text-white light:text-black">
            {balance}€
          </Text>
        </View>
      )}
    </View>
  );
}
