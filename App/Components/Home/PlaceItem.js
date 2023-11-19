import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import HorizontalLine from "./HorizontalLine";

export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=process.env.GOOGLE_MAP_API_KEY",
          }}
          style={{ width: 110, height: 130, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 5 }}>
          {place.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
        >
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
