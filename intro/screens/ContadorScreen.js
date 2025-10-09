//1.-Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
//2.- Main: Zona de componentes
export default function App() {
const [Contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} > Contador: </Text>
      <Text style={styles.texto2}> {Contador} </Text>

      <View  style={styles.botonesContainer}> 
      <Button color="red"title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button color="purple"title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button color="green"title='Reiniciar' onPress={()=>setContador(Contador-Contador)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//3.- Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b40d1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#0bd136ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2:{
    color: '#d14d0bff',
    fontSize: 35,
    fontFamily: 'Courier',
    fontWeight: '700',
    fontStyle: 'normal',
    textDecorationLine: 'underLine',
  },
  botonesContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});
