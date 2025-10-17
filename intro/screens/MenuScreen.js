import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroungScreen from './ImageBackgroungScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'
import { StatusBar } from 'expo-status-bar'

export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textinput':
            return <TextInputScreen/>;
        case 'imagebackgroung':
            return <ImageBackgroungScreen/>
        case 'ScrollView':
            return <ScrollViewScreen/>
        case 'ActivityIndicator':
            return <ActivityIndicatorScreen/>
        case 'FlatList':
            return <FlatListScreen/>
         case 'Modal':
            return <ModalScreen/>
        case 'Bottom Sheet':
            return <BottomSheetScreen/>
        case 'menu':
            default:
                return (
                <View style={styles.container}>
                <Text style={styles.title}>Menú de Prácticas</Text>

                <View style={styles.botonesContainer}>
                <Button title="Pract: Contador" onPress={() => setScreen('contador')} />
                <Button title="Pract: Buttons" onPress={() => setScreen('botones')} />
                <Button title="Pract: TextInput" onPress={() => setScreen('textinput')} />
                <Button title="Pract: ImageBackgroung" onPress={() => setScreen('imagebackgroung')} />
                <Button title="Pract: ScrollView" onPress={() => setScreen('ScrollView')} />
                <Button title="Pract: ActivityIndicator" onPress={() => setScreen('ActivityIndicator')} />
                <Button title="Pract: FlatList" onPress={() => setScreen('FlatList')} />
                <Button title="Pract: Modal" onPress={() => setScreen('Modal')} />
                <Button title="Pract: Bottom Sheet" onPress={() => setScreen('Bottom Sheet')} />
          </View>
                    <StatusBar style='auto'/>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9f9a9aff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#11ec2eff',
  },
   botonesContainer:{
    marginTop: 25,
  
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});