import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function RecentTransaction() {
  const darkMode = false;
  return (
    <View
      className={`border rounded-md p-3 ${
        darkMode ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-gray-50"
      }`}
    >
      <View className="flex-row justify-between items-center mb-3">
        <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
          Recent transactions
        </Text>
        <Link
          href="/transactions"
          className={`text-blue-500 flex items-center text-sm ${
            darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
          }`}
        >
          See all
        </Link>
      </View>

      <View className="space-y-2">
        <View className="flex-row justify-between items-center">
          <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
            Netflix
          </Text>
          <Text className="text-orange-500">-19.99€</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
            Amazon
          </Text>
          <Text className="text-orange-500">-17.43€</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
            Rand
          </Text>
          <Text className="text-green-500">+37.74€</Text>
        </View>
      </View>
    </View>
  );
}
