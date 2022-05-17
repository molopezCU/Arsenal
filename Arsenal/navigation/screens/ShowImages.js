import React from 'react'
import { View, ImageBackground, Dimensions, Image} from 'react-native'
import Images from './Images';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const ShowImages = props => {


    return(
        <View>
          <Image style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', top:0, left:0 }} 
          source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
            <View>
              <Image style={{ height: deviceHeight / 1.01, width: deviceWidth / 1.01, position: 'absolute', 
              resizeMode: 'contain', top: -60, left:2.5 }} source={props.route.params.url}/>
            </View>
        </View>
    )
}

export default ShowImages