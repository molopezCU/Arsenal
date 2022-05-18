import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { auth } from '../../firebase'

const UserProfile = () => {

  let deviceWidth = Dimensions.get('window').width
  let deviceHeight = Dimensions.get('window').height

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Image style={{ height: deviceHeight, width: deviceWidth, 
        position: 'absolute', top:0, left:0 }} 
        source={{ uri: 'https://storage.googleapis.com/fabmaster/media/images/upr_key_art_7Zz.width-10000.jpg' }} />
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <Text style={styles.text}>This is a profile that currently can only
      display whatever user's logged in email is.
      </Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
})