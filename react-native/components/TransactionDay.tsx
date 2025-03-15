import { Text, View } from "react-native";

export default function TransactionDay() {
  return (
    <View className="p-4 dark:bg-gray-900 dark:text-white light:bg-gray-100 lighttext-black">
      <Text>mart 15, 2025</Text>
      <View>
        <View>
          <Text>ATM POSTA RS</Text>
          <Text>19:31</Text>
        </View>

        <Text> -100.00$</Text>
      </View>
    </View>
  );
}
