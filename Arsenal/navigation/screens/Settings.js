import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, ScrollView, Pressable } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Constants from 'expo-constants';
import * as StorageHandler from "../../StorageHandler";
import { useNavigation } from '@react-navigation/native';

export default function SettingsPage(props) {
  const navigation = useNavigation();

  var pageTitle = "Settings";

  if (props.pageTitle != null) {
    pageTitle = props.pageTitle;
  }

  const [isOnArsenalConfig, setIsOnArsenalConfig] = useState(false);

  async function setToInitalSavedValues() {

    const UsernameValue = await StorageHandler.getData("USER_NAME");
    const Password = await StorageHandler.getData("PASSWORD");

    if (UsernameValue != null) {
      setUsernameText(UsernameValue);
    }

    if (Password != null) {
      setPasswordText(Password);
    }
  }

  //Profile Name
  const [UsernameText, setUsernameText] = React.useState("");
  function saveUsername(text) {
    StorageHandler.storeStringData("USER_NAME", text);
  }

  //Profile Password
  const [PasswordText, setPasswordText] = React.useState("");
  function savePassword(text) {
    StorageHandler.storeStringData("PASSWORD", text);
  }


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#707070',
      accent: '#FFFFFF',
    },
  };

  function startTest() {
    if (UsernameText != null && UsernameText != "" && PasswordText != null && PasswordText != "") {
      if (PasswordText.length != 8) {
        alert("Password must be 8 characters!")
      } else {
        navigation.navigate("MainAppPages");
      }
    }
    else {
      if (UsernameText == null || UsernameText == "") {
        alert("Username can't be empty!")
      }
      if (PasswordText == null || PasswordText == "") {
        alert("Password can't be empty!")
      }
    }
  }


  useEffect(() => {

    if (props.pageTitle == "Account Setup") {
      setIsOnArsenalConfig(true);
    }
    else {
      setIsOnArsenalConfig(false);
    }

    setToInitalSavedValues();
  });

  
  return (
    <PaperProvider theme={theme}>
      <ScrollView>
      <View style={styles.container}>

        <Text style={styles.pageTitle}>
          {pageTitle}
        </Text>

        {/* Creates user name input field */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Username"
            mode="outlined"
            returnKeyType="done"
            value={UsernameText}
            onChangeText={(text) => { setUsernameText(text); saveUsername(text); }}
          />
        </View>

        {/* Creates user password input field */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Password"
            mode="outlined"
            returnKeyType="done"
            value={PasswordText}
            maxLength={8}
            onChangeText={(text) => { setPasswordText(text); savePassword(text); }}
          />
        </View>

        <Pressable
          onPress={() => startTest()}
          style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' }, styles.Button]}
          display={isOnArsenalConfig ? "flex" : "none"}
        >
          <Text style={styles.ButtonText}>Access Arsenal</Text>

        </Pressable>


      </View>
      </ScrollView>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },

  //used for page title 
  pageTitle: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },


  toggleContainer: {
    minHeight: 215,
    position: 'absolute',
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  toggleTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
  },
  toggleSwitch: {

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
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});