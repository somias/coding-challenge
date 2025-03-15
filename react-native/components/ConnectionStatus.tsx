import React, { useEffect, useState, useRef } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default function ConnectionStatus() {
  const [isConnected, setIsConnected] = useState(true);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const previousConnected = useRef(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connectionStatus = state.isConnected ?? false;

      if (!previousConnected.current && connectionStatus) {
        setShowOnlineMessage(true);

        setTimeout(() => {
          setShowOnlineMessage(false);
        }, 3000);
      }

      previousConnected.current = connectionStatus;
      setIsConnected(connectionStatus);
    });

    NetInfo.fetch().then((state) => {
      const initialStatus = state.isConnected ?? false;
      previousConnected.current = initialStatus;
      setIsConnected(initialStatus);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected && !showOnlineMessage) {
    return null;
  }

  return (
    <View
      className={`w-full py-2 px-4 ${
        isConnected ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <Text className="text-white text-center font-medium">
        {isConnected ? "You're back online" : "No internet connection"}
      </Text>
    </View>
  );
}
