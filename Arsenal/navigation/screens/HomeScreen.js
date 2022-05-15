import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider, DefaultTheme, BottomNavigation } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import UserProfile from './UserProfile.js';
import CardGallery from './CardGallery';

const MyComponent = () => {
  const [active, setActive] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
      { key: 'card', title: 'Card Gallery', icon: 'wallpaper'},
      {key: 'userProfile', title: 'User Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
      home: HomeScreen,
      card: CardGallery,
      userProfile: UserProfile,

  });

  return (
      <BottomNavigation barStyle = {{backgroundColor: 'ffffff', margin: 20}}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
      >

      </BottomNavigation>

  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  

  return (

    <PaperProvider theme={theme}>
      <ScrollView>
        

      </ScrollView >

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  icon: {
    color: "rgba(205,50,50,1)",
    fontSize: 98,
  },

  buttonView: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#12414F',

  },
};



// const win = Dimensions.get("window");
// const ratio = win.width / 500;
