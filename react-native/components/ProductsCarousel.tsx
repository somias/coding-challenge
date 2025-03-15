import { FlatList, Image, Dimensions, View } from "react-native";
import { useProducts } from "@/hooks/useProducts";
import Skeleton from "./shared/Skeleton";

export default function ProductsCarousel() {
  const { data, isLoading } = useProducts();
  const { width } = Dimensions.get("window");

  if (isLoading) {
    return <Skeleton className="h-80" />;
  }

  return (
    <FlatList
      horizontal
      data={data}
      pagingEnabled={true}
      snapToInterval={width}
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <View className="flex" style={{ width }}>
          <Image
            source={{ uri: item.image }}
            className="h-80 object-cover"
            style={{ width }}
          />
        </View>
      )}
    />
  );
}
