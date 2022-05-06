import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 1,
        resizeMode: 'contain'
    }
});

/*
 import React, { useState } from 'react';
import { render } from 'react-dom';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   ImageBackground,
 } from 'react-native';
 import MenuItem from './component/MenuItem.js';
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

              <View style={styles.menuContainer}>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                <MenuItem itemImage={require('./assets/ARC000-CF.jpg')}/>
                
              </View>

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
   menuContainer: {
     height: '100%',
     flexDirection: 'row',
     flexWrap: 'wrap',
   }
 }); 
*/