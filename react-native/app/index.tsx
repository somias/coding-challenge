import { RefreshControl, ScrollView, View } from "react-native";

import Skeleton from "@/components/shared/Skeleton";
import Summary from "@/components/Summary";
import RecentTransaction from "@/components/RecentTransactions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeRoute() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        contentContainerClassName="p-5 flex-1 gap-12 dark:bg-gray-900 text-white light:bg-gray-100 text-black"
      >
        <Skeleton className="h-64" />

        <View className="gap-6 pt-5">
          <Summary />
          <RecentTransaction />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
