import React, {useState} from 'react'
import{ Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native'

export default function ActivityIndicatorScreen(){
    const[cargando,setCargando]= useState(false);
    const[mostrarContenido, setMostrarContenido]= useState(false);
    const[mensajePrompt, setMensajePrompt]= useState('Presiona acción para comenzar: ');
    const manejarCarga=()=>{
        setCargando(true);
        setMostrarContenido(false);
        setMensajePrompt('Cargando... por favor espere.');
        setTimeout(()=>{
        setCargando(false);
        setMostrarContenido(false);
        setMensajePrompt('Acción completada!');

        },5000)
    }
    const cancelarCarga=()=>{
        setCargando(false);
        setMostrarContenido(false);
        setMensajePrompt('Carga cancelada.');
    };
    return(
        <View style={StyleSheet.contenedor}>
            <Text style={styles.titulo}> Practica: Activity Indicator</Text>
            <Text style={styles.prompt}> {mensajePrompt}</Text>
            <View style={styles.botones}>
            <Button color="#cd1c1cff" title='Accion' onPress={manejarCarga}></Button>
            <View style={{width: 10}}/>
            <Button color="#25dee4ff" title='Cancelar' onPress={cancelarCarga}></Button>
            </View>
            {cargando &&(
                <ActivityIndicator
                    size="large"
                    color= "#08c744ff"
                    style={styles.indicator}
                />
            )}
            {mostrarContenido &&(
                <Text style={styles.contenido}> Acción Completada!</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffffff',
   
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000000ff',
  }, 
  prompt: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3448faff',
  },
  botones: {
    flexDirection: 'row', 
    marginBottom: 20, 
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',
  },
});