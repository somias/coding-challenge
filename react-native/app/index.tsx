import { Link } from "expo-router";
import { RefreshControl, ScrollView, Text, View } from "react-native";

import Skeleton from "@/components/shared/Skeleton";
import Summary from "@/components/Summary";
import RecentTransaction from "@/components/RecentTransactions";

export default function HomeRoute() {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }
      contentContainerClassName="pb-5 flex-1 gap-12 bg-gray-100"
    >
      <Skeleton className="h-64" />

      <View className="gap-6 px-5 pt-5">
        <Summary balance="98.76" />
        <RecentTransaction />
      </View>
    </ScrollView>
  );
}
