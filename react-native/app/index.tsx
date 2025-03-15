import { RefreshControl, ScrollView, View } from "react-native";
import Summary from "@/components/Summary";
import RecentTransaction from "@/components/RecentTransactions";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsCarousel from "@/components/ProductsCarousel";

export default function HomeRoute() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1"
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        contentContainerClassName="p-4 flex-1 gap-6 dark:bg-gray-900 text-white light:bg-gray-100 text-black"
      >
        <View className="h-80">
          <ProductsCarousel />
        </View>
        <View className="gap-6 flex-1 mt-10">
          <Summary />
          <RecentTransaction />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
