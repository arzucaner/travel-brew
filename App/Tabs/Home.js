import { View, Text } from "react-native";
import React from "react";
import Header from "../../App/Components/Home/Header";
import GoogleMapView from "../../App/Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";

export default function Home() {
  return (
    <View style={{ paddingTop: 45, paddingLeft: 20 }}>
      <Header />
      <GoogleMapView />
      <CategoryList/>
    </View>
  );
}
