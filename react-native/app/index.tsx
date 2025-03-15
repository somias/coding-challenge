import { useCallback } from "react";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { RefreshControl, ScrollView, View } from "react-native";
import ProductsCarousel from "@/components/ProductsCarousel";
import Summary from "@/components/Summary";
import RecentTransaction from "@/components/RecentTransactions";

import { useTransactions } from "@/hooks/useTransactions";
import { useProducts } from "@/hooks/useProducts";

export default function HomeRoute() {
  const {
    refetch: refetchTransactions,
    isRefetching: isRefetchingTransactions,
  } = useTransactions();
  const { refetch: refetchProducts, isRefetching: isRefetchingProducts } =
    useProducts();

  const isRefreshing = isRefetchingTransactions || isRefetchingProducts;

  const handleRefresh = useCallback(async () => {
    await Promise.all([refetchTransactions(), refetchProducts()]);
  }, [refetchTransactions, refetchProducts]);

  return (
    <ScreenWrapper>
      <View className="p-4">
        <ProductsCarousel />
      </View>
      <ScrollView
        className="flex-1"
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        contentContainerClassName="p-4 flex-1 gap-6 dark:bg-gray-900 text-white bg-gray-100 text-black"
      >
        <View className="gap-6 flex-1 mt-10">
          <Summary />
          <RecentTransaction />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
