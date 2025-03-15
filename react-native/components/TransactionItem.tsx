import { Text, View } from "react-native";
import Amount from "./Amount";

import { Transaction } from "@/hooks/useTransactions";
import { formatDate } from "@/utils";
interface TransactionItemProps extends Transaction {
  className?: string;
  formatDateOptions?: Intl.DateTimeFormatOptions;
  formatLocaleDate?: boolean;
}

export default function TransactionItem({
  name,
  createdAt,
  isExpense,
  amount,
  className,
  formatDateOptions,
  formatLocaleDate,
}: TransactionItemProps) {
  return (
    <View className={className}>
      <View>
        <Text className="font-medium dark:text-gray-300 light:text-gray-700">
          {name}
        </Text>
        <Text className="text-xs text-gray-500">
          {formatDate(createdAt, formatDateOptions, formatLocaleDate)}
        </Text>
      </View>
      <Amount isExpense={isExpense} amount={amount} />
    </View>
  );
}
