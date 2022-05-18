import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase'

const UserProfile = () => {
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
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>This is a profile that displays whatever user's 
        logged in email is
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
})