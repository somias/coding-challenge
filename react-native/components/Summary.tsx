import { useTransactions } from "@/hooks/useTransactions";
import { Text, View } from "react-native";

export default function Summary() {
  const { balance } = useTransactions();

  return (
    <View className=" dark:bg-gray-800 light:bg-white">
      <Text className="text-lg font-medium mb-3 dark:text-gray-200 light:text-gray-800">
        Summary
      </Text>

      <View className="flex-row border rounded-md p-3 mb-4 flex justify-between items-center dark:border-gray-700 dark:bg-gray-700 light:border-gray-200 light:bg-gray-50">
        <Text className="dark:text-gray-300' : 'light:text-gray-700">
          Balance
        </Text>
        <Text className="font-semibold 'dark:text-white light:text-black">
          {balance}€
        </Text>
      </View>
    </View>
  );
}
