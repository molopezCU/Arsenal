import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import { StatusBar, StyleSheet, View, Pressable } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import StartArsenal from './navigation/screens/StartArsenal';
import ArsenalConfig from './navigation/screens/ArsenalConfig';
import MainHome from './AllScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserProfile from './navigation/screens/UserProfile';
import CardGallery from './navigation/screens/CardGallery';
import { clearAllStoredData } from './StorageHandler';
import Settings from './navigation/screens/Settings';

import HomeScreen from './navigation/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

global.test = true;

global.selectedSound = 0;
global.currentErrorCount = 0;

//bottom left
function AppPages() {
	return (

    <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartArsenal") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
            <Tab.Screen name="HomeScreen" options={{ title: 'Search' }} component={HomeScreen} />
          </Stack.Group>

          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
              })}
          >
            <Stack.Screen name="userprofile" options={{ title: 'User Profile' }} component={UserProfile} />
            <Stack.Screen name="cardgallery" options={{ title: 'Card Gallery' }} component={CardGallery} />
            
          </Stack.Group>
          </Stack.Navigator>
	);
}
//bottom middle
function CardGalleryStack() {
	return (
    <Stack.Navigator>
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartArsenal") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        <Stack.Screen name='CardGallery' options = {{ title: 'Card Gallery' }} component={CardGallery}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

//bottom right
function UserProfileStack() {
	return (
    <Stack.Navigator>
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartArsenal") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        <Stack.Screen name='userprofile' options = {{ title: 'User Profile' }} component={UserProfile}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

//theme where the bakcgruond should be?
function MyTabs() {
	return (
    <PaperProvider theme={theme}>
		<Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#adadad',
        tabBarStyle:{
          backgroundColor:'#12414F',
        },
        gestureEnabled: false
      }} 
    >
			<Tab.Screen 
        name="Search" 
        component={AppPages} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen 
        name="Card Gallery" 
        component={CardGalleryStack} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallpaper" color={color} size={size} />
          ),
        }}
      />

			<Tab.Screen 
        name="Profile" 
        component={UserProfileStack} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })} 
      />
		</Tab.Navigator>
   </PaperProvider>
	);
}


function App() {
  return (
		<NavigationContainer>
      {/* Sets the iOS status bar to white, instead of the default black */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

			<Stack.Navigator initialRouteName="StartArsenal" >

        <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerLeft: null,
                gestureEnabled: false
              })}
          >
            <Stack.Screen name="StartArsenal" options={{ title: 'Welcome to Arsenal' }} component={StartArsenal} />
        </Stack.Group>

        <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',

              })}
              
          >
          <Stack.Screen name='settings' options={{ title: 'Settings' }} component={Settings}/>
          <Stack.Screen name="ArsenalConfig" options={{ title: 'Account Setup' }} component={ArsenalConfig} />
        </Stack.Group>
          <Stack.Group screenOptions={{headerShown: false}}>
				    <Stack.Screen name="MainAppPages" options={{ title: 'Home' }}  component={MyTabs} />
          </Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  EndTestButtonContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EndTestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  EndTestButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#90C96A',
     
  },
};

export default App;