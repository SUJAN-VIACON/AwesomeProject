import { View, Text } from "react-native";
import React from "react";
import { Image, ScrollView } from "react-native-web";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pickup",
  },

  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: "#fff",
        padding: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: 900 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
