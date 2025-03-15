import React from "react";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { View } from "react-native";
import Summary from "@/components/shared/Summary";
import RecentTransactions from "@/components/RecentTransactions";

export default function TransactionsScreen() {
  return (
    <ScreenWrapper>
      <View className="flex-1 p-4">
        <View className="gap-6 flex-1">
          <Summary />
          <RecentTransactions showFull />
        </View>
      </View>
    </ScreenWrapper>
  );
}
