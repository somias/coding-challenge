import React from "react";
import { View } from "react-native";
import Summary from "@/components/Summary";
import RecentTransactions from "@/components/RecentTransactions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4 dark:bg-gray-900 light:bg-gray-100">
        <View className="gap-6 flex-1">
          <Summary />
          <RecentTransactions showFull />
        </View>
      </View>
    </SafeAreaView>
  );
}
