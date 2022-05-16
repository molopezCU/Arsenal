import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import { StatusBar, StyleSheet, View, Pressable, FlatList } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import StartArsenal from './navigation/screens/StartArsenal';
import ArsenalConfig from './navigation/screens/ArsenalConfig';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import UserProfile from './navigation/screens/UserProfile';
import CardGallery from './navigation/screens/CardGallery';
import { clearAllStoredData } from './StorageHandler';
import Account from './navigation/screens/Account';

import HomeScreen from './navigation/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import ShowImages from './navigation/screens/ShowImages';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

global.test = true;

//bottom left
function AppPages() {
	return (

    <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#2e2628',
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                  <View style={styles.ReturntoLoginContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartArsenal") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.ReturntoLogin]}
                    >
                      <Text style={styles.ReturntoStartPage}>Log out</Text>
            
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
                  backgroundColor: '#2e2628',
                },
                headerTintColor: '#fff',
                // headerRight: () => (
                //   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('account')}} />
                // ),
              })}
          >
            {/* <Stack.Screen name="userprofile" options={{ title: 'User Profile' }} component={UserProfile} /> */}
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
                  backgroundColor: '#2e2628',
                },
                headerTintColor: '#fff',
                // headerRight: () => (
                //   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('account')}} />
                // ),
                headerLeft: () => (
                  <View style={styles.ReturntoLoginContainer}>
                    {/* <Pressable
                        onPress={() => navigation.navigate("StartArsenal") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.ReturntoLogin]}
                    >
                      <Text style={styles.ReturntoStartPage}>Back</Text>
            
                    </Pressable> */}
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        <Stack.Screen name='CardGallery' options = {{ title: 'Card Gallery' }} component={CardGallery}/>
        <Stack.Screen name="ShowImages" options={{ title: 'Show Images' }} component={ShowImages} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function ShowImagesStack() {
	return (
    <Stack.Navigator>
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#2e2628',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('showImages')}} />
                ),
                headerLeft: () => (
                  <View style={styles.ReturntoLoginContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("showImages") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.ReturntoLogin]}
                    >
                      <Text style={styles.ReturntoStartPage}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        {/* <Stack.Screen name='userprofile' options = {{ title: 'User Profile' }} component={UserProfile}/> */}
      </Stack.Group>
    </Stack.Navigator>
  );
}

// //bottom right
// function UserProfileStack() {
// 	return (
//     <Stack.Navigator>
//           <Stack.Group style={ { backgroundColor: '#6a51ae' }}
//               screenOptions={({ navigation }) => ({
//                 headerStyle: {
//                   backgroundColor: '#2e2628',
//                 },
//                 headerTintColor: '#fff',
//                 headerRight: () => (
//                   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('account')}} />
//                 ),
//                 headerLeft: () => (
//                   <View style={styles.ReturntoLoginContainer}>
//                     <Pressable
//                         onPress={() => navigation.navigate("StartArsenal") }
//                         style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.ReturntoLogin]}
//                     >
//                       <Text style={styles.ReturntoStartPage}>Back</Text>
            
//                     </Pressable>
//                   </View>
//                 ),
//                 gestureEnabled: false
//               })}
//           >
//         <Stack.Screen name='userprofile' options = {{ title: 'User Profile' }} component={UserProfile}/>
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

//bottom bars
function MyTabs() {
	return (
		<Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#adadad',
        tabBarStyle:{
          backgroundColor:'#2e2628',
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

			{/* <Tab.Screen 
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
      /> */}
		</Tab.Navigator>
	);
}


function App() {
  return (
		<NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

			<Stack.Navigator initialRouteName="StartArsenal" >

        <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#2e2628',
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
                  backgroundColor: '#2e2628',
                },
                headerTintColor: '#fff',

              })}
              
          >
          <Stack.Screen name='account' options={{ title: 'Account' }} component={Account}/>
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
  ReturntoLoginContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ReturntoLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  ReturntoStartPage: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;