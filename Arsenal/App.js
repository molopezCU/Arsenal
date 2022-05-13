// import * as React from 'react'
// import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";
// import { StatusBar, StyleSheet, View, Pressable } from 'react-native';

// import LogIn from './navigation/screens/LogIn';
// import SearchBar from './navigation/screens/SearchBar';
// import CardGallery from './navigation/screens/CardGallery';
// import DeckBuilder from './AllScreen';
// import Profile from './navigation/screens/Profile.js';
// import Settings from './navigation/screens/Settings.js';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import { clearAllStoredData } from './StorageHandler';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Ionicons } from '@expo/vector-icons';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const MaterialTopTab = createMaterialTopTabNavigator();

// function TestPages() {
// 	return (

//     <Stack.Navigator initialRouteName="CardGallery">
//           <Stack.Group style={ { backgroundColor: '#6a51ae' }}
//               screenOptions={({ navigation }) => ({
//                 headerStyle: {
//                   backgroundColor: '#12414F',
//                 },
//                 headerTintColor: '#fff',
//                 headerRight: () => (
//                   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
//                 ),
//                 headerLeft: () => (
//                   <View style={styles.EndTestButtonContainer}>
//                     <Pressable
//                         onPress={() => navigation.navigate("StartTest") }
//                         style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
//                     >
//                       <Text style={styles.EndTestButtonText}>Back</Text>
            
//                     </Pressable>
//                   </View>
//                 ),
//                 gestureEnabled: false
//               })}
//           >
//             <Tab.Screen name="SearchBar" options={{ title: 'Home' }} component={SearchBar} />
//           </Stack.Group>

//           <Stack.Group style={ { backgroundColor: '#6a51ae' }}
//               screenOptions={({ navigation }) => ({
//                 headerStyle: {
//                   backgroundColor: '#12414F',
//                 },
//                 headerTintColor: '#fff',
//                 headerRight: () => (
//                   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
//                 ),
//               })}
//           >

//             <Stack.Screen name="searchbar" options={{ title: 'SearchBar' }} component={PreDriveScreen} />
//             <Stack.Screen name="cardgallery" options={{ title: 'Freeway Lane Change Left' }} component={FreewayLaneChangeScreen} />
//             <Stack.Screen name="profile" options={{ title: 'Freeway Lane Change Right' }} component={FreewayLaneChangeRightScreen} />
//             <Stack.Screen name="searchbar" options={{ title: 'Results' }} component={TestResult} />
//             <Stack.Screen name="settings" options={{ title: 'Parking Lot' }} component={ParkingLot} />
//             <Stack.Screen name="Freeway" options={{ title: 'Freeway' }} component={FreewayTabs} />
            
//           </Stack.Group>
//           </Stack.Navigator>
// 	);
// }

//CARD GALLERY
import React, { useState } from 'react';
import { render } from 'react-dom';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   StatusBar,
   View,
   Text,
   TextInput,
   ImageBackground,
 } from 'react-native';
import CardGallery from './navigation/screens/CardGallery';
// import { ImageBackground } from 'react-native-web';
 //import SearchDropDown from './component/SearchDropDown';
 export default class App extends React.Component {
   render() {
     return(
       <ImageBackground
            source={require('./assets/bg.jpg')}
            style={styles.container}>

            <View style={styles.overlayContainer}>

              <View style={styles.top}>
                <Text style={styles.header}>A R S E N A L</Text>
              </View>

              <ScrollView>

                <View style={styles.cardContainer}>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                <CardGallery itemImage={require('./assets/ARC000-CF.jpg')}/>
                </View>

              </ScrollView>

          </View>

        </ImageBackground>
        
     );
   }
}

 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     flex: 1,
   },
   overlayContainer: {
     flex: 1,
     backgroundColor: 'rgba(47,163,218, .4)',
   },
   top: {
     height: '40%',
     alignItems: 'center',
     justifyContent: 'center',
   },
   header: {
     color: '#fff',
     fontSize: 28,
     borderColor: '#fff',
     borderWidth: 2,
     padding: 20,
     paddingLeft: 40,
     paddingRight: 40,
     backgroundColor: 'rgba(255,255,255, .1)',
   },
      
   scrollView: {
    flex: 1,
   },
   cardContainer: {
     height: '100%',
     flexDirection: 'row',
     flexWrap: 'wrap',
   }
 });