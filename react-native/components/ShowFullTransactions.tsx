import { SectionList, Text, View } from "react-native";
import TransactionItem from "./TransactionItem";
import { useTransactions } from "@/hooks/useTransactions";
import { formatDate, groupTransactionsByDate } from "@/utils";
import Skeleton from "./shared/Skeleton";

export default function ShowFullTransactions() {
  const { data, isLoading } = useTransactions();
  const groupedTransactions = groupTransactionsByDate(data ?? []);

  if (isLoading) {
    return (
      <View>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Skeleton className="h-10 my-2" />
          ))}
      </View>
    );
  }

  return (
    <SectionList
      className="flex-1"
      contentContainerClassName="pb-10"
      sections={groupedTransactions}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TransactionItem
          className="dark:bg-gray-900 light:bg-gray-100 flex-row items-center justify-between px-2 pt-4"
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
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { day } }) => (
        <View className="pt-4 mt-4 pl-2 dark:bg-gray-900 light:bg-gray-100 rounded-t-lg">
          <Text className="dark:text-white light:text-black text-xl font-semibold lowercase">
            {formatDate(
              day,
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              },
              true
            )}
          </Text>
        </View>
      )}
    />
  );
}
