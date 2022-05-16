import React from 'react'
import { View, ImageBackground, Dimensions, Image} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Images from './Images';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const ShowImages = props => {


    return(
        <View>
            <Image style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', top:0, left:0 }} source={props.route.params.url} />
        </View>
    )
}

export default ShowImages