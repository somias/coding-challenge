import { Text } from "react-native";

interface AmountProps {
  isExpense: boolean;
  amount: number;
}

export default function Amount({ isExpense, amount }: AmountProps) {
  return (
    <Text
      className={`font-medium ${
        isExpense ? "text-orange-500" : "text-green-500"
      }`}
    >
      {isExpense ? "-" : "+"}
      {amount}€
    </Text>
  );
}
