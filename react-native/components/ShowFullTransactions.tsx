import { SectionList, Text, View } from "react-native";
import Skeleton from "./shared/Skeleton";
import TransactionItem from "./TransactionItem";
import EmptyData from "./EmptyData";

import { useTransactions } from "@/hooks/useTransactions";

export default function ShowFullTransactions() {
  const { isLoading, groupedTransactions } = useTransactions();

  if (isLoading) {
    return (
      <View>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} className="h-10 my-2" />
          ))}
      </View>
    );
  }
  return (
    <SectionList
      className="flex-1"
      contentContainerClassName="pb-10 dark:bg-gray-900 bg-gray-100 flex-grow"
      sections={groupedTransactions}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TransactionItem
          className="flex-row items-center justify-between px-2 pt-2 pb-2 dark:bg-gray-900"
          key={item.id}
          id={item.id}
          name={item.name}
          createdAt={item.createdAt}
          isExpense={item.isExpense}
          amount={item.amount}
          formatDateOptions={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
        />
      )}
      renderSectionHeader={({ section: { formattedDay } }) => (
        <View className="pt-4 pb-2 pl-2 dark:bg-gray-900 border-b dark:border-gray-800 bg-gray-100 border-slate-200">
          <Text className="dark:text-white light:text-black text-xl font-semibold">
            {formattedDay}
          </Text>
        </View>
      )}
      ListEmptyComponent={
        <View className="flex-1 justify-center items-center px-6">
          <EmptyData />
        </View>
      }
    />
  );
}
