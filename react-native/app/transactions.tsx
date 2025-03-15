import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

const TransactionSummary = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const transactions = [
    { id: 1, name: "Netflix", amount: -19.99 },
    { id: 2, name: "Amazon", amount: -17.43 },
    { id: 3, name: "Rand", amount: 37.74 },
  ];

  return (
    <View className={`flex-1 p-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <View className="flex-row justify-end mb-4">
        <Pressable
          onPress={toggleDarkMode}
          className={`px-3 py-1 rounded-md ${
            darkMode ? "bg-gray-700" : "bg-white border border-gray-300"
          }`}
        >
          <Text className={darkMode ? "text-white" : "text-gray-700"}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Text>
        </Pressable>
      </View>

      <View
        className={`border-2 rounded-lg overflow-hidden ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
        }`}
      >
        {/* Summary Header */}
        <View
          className={`p-4 border-b ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <Text
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Summary
          </Text>
        </View>

        {/* Balance */}
        <View
          className={`mx-4 my-3 p-3 border rounded-md ${
            darkMode
              ? "border-gray-700 bg-gray-700"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <View className="flex-row justify-between items-center">
            <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Balance
            </Text>
            <Text
              className={`font-bold text-lg ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              98.76€
            </Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <View
          className={`mx-4 mb-4 p-3 border rounded-md ${
            darkMode
              ? "border-gray-700 bg-gray-700"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <View className="mb-3">
            <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Recent transactions
            </Text>
          </View>

          <View className="space-y-2">
            {transactions.map((transaction) => (
              <View
                key={transaction.id}
                className="flex-row justify-between items-center py-1"
              >
                <Text className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  {transaction.name}
                </Text>
                <Text
                  className={
                    transaction.amount >= 0
                      ? "text-green-500 font-medium"
                      : "text-orange-500 font-medium"
                  }
                >
                  {transaction.amount >= 0
                    ? `+${transaction.amount.toFixed(2)}€`
                    : `${transaction.amount.toFixed(2)}€`}
                </Text>
              </View>
            ))}

            <View className="flex-row justify-between items-center py-1 mt-1">
              <Text
                className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}
              >
                ...
              </Text>
              <Text
                className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}
              >
                ...€
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionSummary;
