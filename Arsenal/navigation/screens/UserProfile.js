import * as React from 'react';
import { StyleSheet, View, Text, Linking, ScrollView, TextInput, Pressable, KeyboardAvoidingView, RefreshControl, Share, Alert, Image } from 'react-native';
import * as StorageHandler from "../../StorageHandler";




export default function UserProfile() {
  return(
    <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
  )
}