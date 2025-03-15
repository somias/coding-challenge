import { Text, View } from "react-native";

export default function EmptyData() {
  return (
    <View className="py-4 items-center">
      <Text className="text-gray-500">No recent transactions</Text>
    </View>
  );
}
