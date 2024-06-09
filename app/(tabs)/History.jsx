import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Tab() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{fontStyle:"italic",
        fontSize:100}}>Profile</Text>
      </View>
    );
}