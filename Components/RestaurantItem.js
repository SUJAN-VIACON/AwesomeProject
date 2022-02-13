import { View, Text } from "react-native";
import React from "react";
import { Image, TouchableOpacity } from "react-native-web";
import MeterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://c.ndtvimg.com/2020-10/p0n323j_delhi-restaurants-generic-650-_625x300_08_October_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />

    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MeterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontWeight: 15, fontWeight: "bold" }}>
        hadjoi resturent gopal
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-40 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
