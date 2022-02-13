import { View, Text } from "react-native";
import React from "react";
import HeaderTabs from "../Components/HeaderTabs";
import { SafeAreaView, ScrollView } from "react-native-web";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItem from "../Components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, height: 100 }}>
      <View style={{ backgroundColor: "white", paddingVertical: 16 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
