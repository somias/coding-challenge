import { FlatList, Image, View, Dimensions } from "react-native";
import Skeleton from "./shared/Skeleton";

import { useProducts } from "@/hooks/useProducts";

const PARENT_PADDING = 8 * 2;
const ITEM_SPACING = 8;

export default function ProductsCarousel() {
  const { data, isLoading } = useProducts();
  const { width } = Dimensions.get("window");

  const CONTAINER_WIDTH = width - PARENT_PADDING;

  if (isLoading) {
    return <Skeleton className="h-80" />;
  }

  return (
    <FlatList
      horizontal
      data={data}
      pagingEnabled={true}
      snapToInterval={CONTAINER_WIDTH}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <View
          style={{ width: CONTAINER_WIDTH, paddingHorizontal: ITEM_SPACING }}
        >
          <Image
            source={{ uri: item.image }}
            className="h-80 object-cover"
            style={{
              width: CONTAINER_WIDTH - ITEM_SPACING * 2,
              borderRadius: 8,
            }}
          />
        </View>
      )}
    />
  );
}
