import * as React from 'react';
import { StyleSheet, View, Text, Linking, ScrollView, TextInput, Pressable, KeyboardAvoidingView, RefreshControl, Share, Alert, Image } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';



export default function UserProfile() {
  return(
    <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
  )
  }

const styles = StyleSheet.create({
  title: {
    fontSize: 25, 
    fontWeight: 'bold'
  },
  titleRow: {
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'baseline',
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  sectionRow: {
      height: 45,
      borderRadius: 10,
      backgroundColor: 'white',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
      
      paddingLeft: 15,
      paddingRight: 15,
      paddingVertical: 8,

      alignItems: 'center',
      flexDirection: "row",

      shadowColor: 'black',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.05,
      shadowRadius: 25,
  },
  sectionName: {
    flex: 1,
    textAlign: "left",
    fontSize: 22,
    fontWeight: '500',
  },
  sectionResult: {
    textAlign: "right",
    fontSize: 22,
    fontWeight: "500"
  },
  sendButtonContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  finalResultRow: {
    minHeight: 67.5,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },
  finalResultsText: {
    color: 'white',
    fontSize: 22,
    marginTop: -10,
    fontWeight: 'bold'
  },
  detailedResultsRow: {
    borderRadius: 10,
    minHeight: 40,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 8,

    marginLeft: 45,
    marginRight: 15,
    marginTop: 5,

    alignItems: 'center',
    flexDirection: "row",

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },
  detailedResultsName: {
    flex: 1,
    textAlign: "left",
    fontSize: 22,
    fontWeight: '300',
    paddingRight: 5,
  },
  detailedResultsContainer: {

  },
  textInput: {
    borderRadius: 10,
    backgroundColor: 'white',
    minHeight: 90,
    padding: 12,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },

  reasonsForFailure: {
    minHeight: 67.5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    paddingBottom: 5,
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },

  reasonsForFailureTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  reasonsForFailureItems: {
    lineHeight: 30,
    fontSize: 20,
    fontWeight: '400'
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#12414F',
     
  },
};
