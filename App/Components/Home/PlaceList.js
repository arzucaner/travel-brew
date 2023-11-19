import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";

export default function PlaceList({ placeList }) {
  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 600 }}>
        {" "}
        Found {placeList.length} Places{" "}
      </Text>

      <FlatList
        data={placeList}
        renderItem={({ item, index }) =>
          index % 4 == 0 ? (
            <PlaceItemBig place={item} />
          ) : (
            <PlaceItem place={item} />
          )
        }
      />
    </View>
  );
}
