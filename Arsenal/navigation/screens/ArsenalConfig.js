import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Settings from './Settings';


export default function ArsenalConfig({ navigation }) {

    return (
        <PaperProvider>
      
            <Settings pageTitle="Account Setup"/>

        </PaperProvider>
    );
}