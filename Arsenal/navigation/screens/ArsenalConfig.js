//unused as of 5/17
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Account from './Account';


export default function ArsenalConfig({ navigation }) {

    return (
        <PaperProvider>
      
            <Account pageTitle="Account Setup"/>

        </PaperProvider>
    );
}