import React, { useState, useEffect, useRef } from 'react';
import {View,Text,TextInput,Button,Alert,StyleSheet,Switch,ImageBackground,Animated,Platform} from 'react-native';

export default function RepasoScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [encendido, cambiarEncendido] = useState(false);
  const [cargando, setCargando] = useState(true);
  const desvanecido = useRef(new Animated.Value(1)).current;

  const mostrarAlerta = () => {
  switch (true) {
    case !nombre.trim() && !correo.trim():
      Alert.alert('Error', 'Favor de llenar todos los campos');
      break;
    case !nombre.trim():
      Alert.alert('Error', 'Favor de llenar el campo de Nombre');
      break;
    case !correo.trim():
      Alert.alert('Error', 'Favor de llenar el campo de Correo');
      break;
    case !/\S+@\S+\.\S+/.test(correo):
      Alert.alert('Error', 'Ingrese un correo electrónico válido');
      break;
    case !encendido:
      Alert.alert('Error', 'Términos no aceptados');
      break;
    default:
      Alert.alert('Registro Exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  }
};


  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground
          source={require('../assets/Recursos/Fin1.png')} 
          resizeMode="contain"
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>CARGANDO.........</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/Recursos/grim.png')} 
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.textoContainer}>
        <Text style={styles.texto}>Práctica: Repaso</Text>

        <TextInput
          placeholder="Nombre Completo"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          placeholder="Correo"
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.terminos}>
          <Text style={{ color: 'white' }}>¿Acepta términos y condiciones?</Text>
          <Switch value={encendido} onValueChange={cambiarEncendido} />
        </View>

        <Button color="#151716ff" title="Registrarse" onPress={() => {
    console.log("Botón presionado");
    mostrarAlerta();}} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  texto: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    position: 'absolute',
    fontSize: 20,
    color: '#333',
  },
  textoContainer: {
    width: '80%',
    backgroundColor: 'rgba(81, 78, 78, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    color: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ffffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(143, 140, 140, 0.7)',
  },
  terminos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
});
