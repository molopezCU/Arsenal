import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Image,
} from "react-native";

import * as StorageHandler from "../../StorageHandler";

export default function StartTest({ navigation }) {
  return (

    <ScrollView>
        <View style={{alignItems: 'center', justifyContent:'center', paddingVertical:'12%'}}>
            <Pressable onPress={() => creditsCounter()}>
                <Image
                source={require('../../assets/favicon.png')}
                />
            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("ArsenalConfig") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Create Account</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("MainAppPages") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Continue as Guest</Text>

            </Pressable>
        </View>
    </ScrollView>
  );

}


const styles = StyleSheet.create({
    title: {
      fontSize: 25, 
      fontWeight: 'bold'
    },
    ButtonContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});