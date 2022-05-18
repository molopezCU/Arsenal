import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Provider as PaperProvider, DefaultTheme, BottomNavigation } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import CardGallery from './CardGallery';
import SearchDropDown from "./SearchDropDown";
import Images from './Images';
import ShowImages from './ShowImages';
import LoginScreen from "./LoginScreen";

export default function HomeScreen() {

  const navigation = useNavigation();

  const localImage = require=("../../assets/bg.jpg");
  let deviceWidth = Dimensions.get('window').width
  let deviceHeight = Dimensions.get('window').height

  const [dataSource, Images] = useState([ //array of text that is used in HomeScreen.js item
    'Katsu',
    'Dorinthea', 
    'Rhinar', 
    'Bravo',
  ])

   const [filtered, setFiltered] = useState(dataSource)
   const [searching, setSearching] = useState(false)
   const onSearch = (text) => { //logic for when typing
     if (text) {
       setSearching(true)
       const temp = text

       const tempList = dataSource.filter(item => { //if the text matches an item on the text array, return it
         if (item.match(temp))
            return item
       })
       setFiltered(tempList)
     }
     else {
       setSearching(false)
       setFiltered(dataSource)
     }
   }

   return (
    <View style={styles.container}>
      <View>
      <Image style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', top:0, left:0 }} 
      source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
      <ScrollView>
        <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='white'
        onChangeText={onSearch}/>
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginTop: 25, marginBottom: 20, color: 'white', fontWeight: "bold"}}> Cards</Text>
        <View style={{
          flexWrap: 'wrap', flexDirection: 'row',
          justifyContent: 'center'}}>
            {
              dataSource.map((item, index) => {
                return (
                  <View style={{
                    margin: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 250, width: 175, backgroundColor: 'gray'}}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item}
                    </Text>
                  </View>
                )
              })
            }
        </View>
      </View>
      </ScrollView>
        {
          searching && //stops filtering as an option has been selected
          <SearchDropDown
            onPress={() => setSearching(false)}
            dataSource={filtered} />
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '100%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },  
}); 

// useEffect(() => {
//   let items = Array.apply(null, Array(60)).map((v, i) => {
//     return {
//       id: i,
//       url: require('../../assets/WTR_1.width-450.png'+ (i + 1)),
//     };
//   });

//   setDataSource(items);

// }, []);

// return (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Image style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', top:0, left:0 }} source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
//         <FlatList
//           data={dataSource}
//           renderItem={({item}) => (
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 margin: 1
//               }}>
//               <Image
//                 style={styles.imageThumbnail}
//                 source={image.url}
//               />
//             </View>
//           )}
//       numColumns={3}
//       keyExtractor={(item, index) => index} />
//     </View>
//   </SafeAreaView>
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   imageThumbnail: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     resizeMode: 'contain',
//   },
// });

