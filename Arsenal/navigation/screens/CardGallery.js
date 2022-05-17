import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput, ActivityIndicator, ImageBackground, PanResponder } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Images from './Images';
import ShowImages from './ShowImages';


const CardGallery = (props) => {

    const localImage = require=("../../assets/bg.jpg");
    let deviceWidth = Dimensions.get('window').width
    let deviceHeight = Dimensions.get('window').height

    return (
      <View>
        <Image style={{ height: deviceHeight, width: deviceWidth, 
        position: 'absolute', top:0, left:0 }} 
        source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
          <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
              {
                Images.map((image, index) => (
                  <TouchableOpacity key={index} 
                  onPress={() => props.navigation.navigate("ShowImages", {url: image.url}) }>
                    <Image source={image.url}
                      style={
                        {
                          height: deviceHeight / 3,
                          width: deviceWidth / 2 - 4,
                          borderRadius: 10, margin: 2,
                          resizeMode: 'contain',
                        }
                      }/>
                  </TouchableOpacity>
                ))
              }
            </View>
          </ScrollView>
      </View>
    );
  }

export default CardGallery