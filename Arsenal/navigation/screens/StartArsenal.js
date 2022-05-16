import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Image,
  Dimensions,
} from "react-native";

import * as StorageHandler from "../../StorageHandler";

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default function StartTest({ navigation }) {
  return (
    <View>
      <Image style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', top:0, left:0 }} source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/map_of_rathe_orig_v1.width-10000.jpg' }} />
    <ScrollView>
        <View style={{alignItems: 'center', justifyContent:'center', paddingVertical:'12%'}}>
                <Image
                source={require('../../assets/fablogo.png')}
                />
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("ArsenalConfig") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#2e2628' : '#1c1718' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Create Account</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("MainAppPages") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#2e2628' : '#1c1718' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Continue as Guest</Text>

            </Pressable>
        </View>
    </ScrollView>
    </View>
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