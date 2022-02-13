import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HearderBtn
        btnText="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HearderBtn
        btnText="PickUp"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HearderBtn = (props) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
        backgroundColor: props.activeTab === props.btnText ? "black" : "white",
      }}
      onPress={() => props.setActiveTab(props.btnText)}
    >
      <Text
        style={{
          color: props.activeTab === props.btnText ? "white" : "black",
          fontWeight: 15,
          fontWeight: 900,
        }}
      >
        {props.btnText}
      </Text>
    </TouchableOpacity>
  );
};
