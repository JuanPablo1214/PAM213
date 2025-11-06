import {view, Buttom, StyleSheet, TouchableOpacity, StatusBar, Image, ImageBackground, Text, View} from 'react-native'
import { useState, useEffect } from 'react'

const MAIN_IMAGE= require('../assets/i.png')

export default function SplashScreen(){

    const [screen, setScreen]= useState=('Mi Gáleria');
        //const [isLoading, setIsLoading]= useState(true);

        switch(screen){
              case '':
            return <Screen/>;

            case 'Mi Gáleria':
            return(
                <View style={StyleSheet.container}>
                    <Text style={StyleSheet.title}>Mi Gáleria</Text>
                        <></>




                </View>
            );

        
        }

          return(
        <ImageBackground
        source={MAIN_IMAGE}
        resizeMode='cover'
        imageStyle={styles.mainImageStyle}
        style={styles.mainBackground}
        >
        </ImageBackground>
    );

    
}