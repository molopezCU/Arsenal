import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput, ActivityIndicator, ImageBackground, PanResponder } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PropTypes from "prop-types";


export default function CardGallery({ navigation }) {

    const navigator = useNavigation();
    const localImage = require=("../../assets/bg.jpg");
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height

    const [loading, setLoading] = React.useState(false);

    const IMAGES = [
      "https://storage.googleapis.com/fabmaster/media/images/WTR_150.width-450.png",
      "https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
      "https://fabdb2.imgix.net/cards/printings/WTR000-CF.png?w=300&fit=clip&auto=compress&rect=25,25,496,712",
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
               <Image
                 source={{ uri: image }}
                 style={[
                   styles.Image,
                   {
                     flex: 1,
                     width: i ? 200 : 200,
                     height: i ? 200 : 200,
                   },
                 ]}
                 resizeMode="center"
                 onLoadStart={() => setLoading(true)}
                 onLoadEnd={() => setLoading(false)}
               />
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
    marginHorizontal: 1,
    marginTop: 1,
    width: "100%",
  },
  Image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

 });