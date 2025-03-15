import { SafeAreaView } from "react-native-safe-area-context";
import ConnectionStatus from "../ConnectionStatus";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <SafeAreaView className="flex-1 dark:bg-gray-900 bg-gray-100">
      <ConnectionStatus />
      {children}
    </SafeAreaView>
  );
}
