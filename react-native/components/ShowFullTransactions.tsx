import { useTransactions } from "@/hooks/useTransactions";
import { SectionList, Text, View } from "react-native";
import { groupTransactionsByDate } from "@/utils";

export default function ShowFullTransactions() {
  const { data } = useTransactions();

  const groupedTransactions = groupTransactionsByDate(data ?? []);
  const sections = groupedTransactions.map((group) => ({
    date: group.date,
    data: group.transactions,
  }));

  console.log(groupedTransactions);
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.amount}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { date } }) => <Text>{date}</Text>}
    />
  );
}
