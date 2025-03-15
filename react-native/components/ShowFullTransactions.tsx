import { useTransactions } from "@/hooks/useTransactions";
import { SectionList, Text, View } from "react-native";
import { formatDate, groupTransactionsByDate } from "@/utils";
import Amount from "./Amount";

export default function ShowFullTransactions() {
  const { data } = useTransactions();
  const groupedTransactions = groupTransactionsByDate(data ?? []);
  const sections = groupedTransactions.map((group) => ({
    date: group.date,
    data: group.transactions,
  }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className="dark:bg-gray-900 light:bg-gray-100 flex-row items-center justify-between px-2 pt-4">
          <View className="">
            <Text className="dark:text-white light:text-black">
              {item.name}
            </Text>
            <Text className="dark:text-white light:text-black text-xs">
              {formatDate(item.createdAt, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </Text>
          </View>
          <Amount isExpense={item.isExpense} amount={item.amount} />
        </View>
      )}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { date } }) => (
        <View className="pt-4 mt-4 pl-2 dark:bg-gray-900 light:bg-gray-100 rounded-t-lg">
          <Text className="dark:text-white light:text-black text-xl font-semibold lowercase">
            {formatDate(
              date,
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
