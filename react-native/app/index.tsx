import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeRoute() {
  return (
    <View className="flex items-center justify-center flex-1 text-white">
      <Link href="/transactions">
        <Text className="text-white">Open modal</Text>
      </Link>
    </View>
  );
}
