import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput, ActivityIndicator, ImageBackground, PanResponder } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PropTypes from "prop-types";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CardGallery({ navigation }) {

    const navigator = useNavigation();
    const localImage = require=("../../assets/bg.jpg");
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height

    const [loading, setLoading] = React.useState(false);

    const IMAGES = [
      "https://storage.googleapis.com/fabmaster/media/images/WTR_76.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_77.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_78.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_79.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_80.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_81.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_82.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_83.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_84.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_85.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_1.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_2.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_3.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_4.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_5.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_6.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_7.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_8.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_9.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_10.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_113.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_114.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_115.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_116.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_117.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_118.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_119.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_120.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_121.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_122.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_38.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_39.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_40.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_41.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_42.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_43.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_44.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_45.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_46.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/WTR_47.width-450.png",
    ];

    return (
      <View style={styles.galleryContainer}>
        <View>
        <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
        </View>
       <StatusBar style="auto" />
       <ScrollView
         style={styles.ImageContainer}
         contentContainerStyle={{
           padding: 5,
           flexDirection: "row",
           flexWrap: "wrap",
           justifyContent: "center",
         }}
         horizontal={false}
       >
         {IMAGES.map((image, i) => {
           return (
             <View
               style={{
                 padding: 5
                ,
               }}
               key={i}
             >
               <TouchableOpacity onPress={()=> alert('image clicked')}>
               <Image
                 source={{ uri: image }}
                 style={[
                   styles.Image,
                   {
                     width: i ? 200 : 200,
                     height: i ? 200 : 200,
                   },
                 ]}
                 resizeMode="contain"
                 onLoadStart={() => setLoading(true)}
                 onLoadEnd={() => setLoading(false)}
               />
               </TouchableOpacity>
               {loading && <ActivityIndicator color="green" size="large" />}
             </View>
           );
         })}
       </ScrollView>
   </View>
 );
}


const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  ImageContainer: {
    marginHorizontal: 5,
    marginTop: 5,
    width: "100%",
  },
  Image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

 });