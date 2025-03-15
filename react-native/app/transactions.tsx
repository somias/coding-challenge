import React from "react";
import { View } from "react-native";
import Summary from "@/components/Summary";
import RecentTransactions from "@/components/RecentTransactions";

export default function TransactionSummary() {
  return (
    <View className="flex-1 p-4 dark:bg-gray-900 light:bg-gray-100">
      <View className="gap-6">
        <Summary />
        <RecentTransactions showFull />
      </View>
    </View>
  );
}
