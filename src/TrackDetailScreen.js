import React, { useContext } from "react";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Context as SaveLocationContext } from "../Context/SaveLocationContext";

export default function TrackDetailScreen() {
  const { state, getTracks } = useContext(SaveLocationContext);

  return (
    <SafeAreaView style={{ height: "100%", width: "100%", marginTop: 100 }}>
      <NavigationEvents onWillFocus={getTracks} />

      <FlatList
        data={state}
        keyExtractor={(items) => items._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  padding: 10,
                  backgroundColor: "indigo",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
