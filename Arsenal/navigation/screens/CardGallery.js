import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput, ActivityIndicator, ImageBackground, PanResponder } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Images from './Images';
import ShowImages from './ShowImages';


const CardGallery = (props) => {

    const navigator = useNavigation();
    const localImage = require=("../../assets/bg.jpg");
    let deviceWidth = Dimensions.get('window').width
    let deviceHeight = Dimensions.get('window').height

    const [loading, setLoading] = React.useState(false);

    return (
      <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
        {
          Images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => props.navigation.navigate("ShowImages", {url: image.url}) }>
              <Image source={image.url}
              style={
                {
                  height: deviceHeight / 3,
                  width: deviceWidth / 3 - 6,
                  borderRadius: 10, margin: 2,
                  resizeMode: 'contain',
                }
              }/>
              

            </TouchableOpacity>
          ))
        }
      </View>
      </ScrollView>
    );
}

export default CardGallery