import {view, Buttom, StyleSheet, TouchableOpacity, StatusBar, Image, ImageBackground, Text, View} from 'react-native'
import React,{ useState, useEffect } from 'react'

const MAIN_IMAGE= require('../assets/p.png')
const SPLASH_IMAGE= require ('../assets/i.png');

export default function SplashScreen(){
    const [isloading,setIsloading]= useState(true);
    useEffect (()=>{
        const timer = setTimer(()=>{
            setIsloading(false);
        },3000);
        return clearTimeout(timer);
    }, []);
    if(isLoading){
        return(
            <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode='cover'
            imageStyle= {styles.splashImageStyle}
            style={styles.splashBackground}
            >
            </ImageBackground>
        )
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

const styles = StyleSheet.create({
    splashBackground:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    },
    splashImageStyle:{
    opacity: 0.85,
    },
    mainImageStyle:{
        opacity: 1,

    },
    mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
    //container:{
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#7d7d7dff',
    //},
});
