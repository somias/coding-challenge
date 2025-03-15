import { View } from "react-native";
import clsx from "clsx";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <View
      className={clsx(
        "animate-pulse min-h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-full",
        className
      )}
    />
  );
}
