import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function moneyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.back}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Últimos movimientos</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>

        <Text style={styles.date}>4 de noviembre</Text>

        <View style={styles.card}>
          <Text style={styles.titulo}>Spei enviado arcu...</Text>
          <Text style={styles.montoNegativo}>$ -650.00</Text>
          <Text style={styles.subtext}>Transferencia interbancaria enviada</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Spei enviado arcu...</Text>
          <Text style={styles.montoNegativo}>$ -2,000.00</Text>
          <Text style={styles.subtext}>Transferencia interbancaria enviada</Text>
        </View>

        <Text style={styles.date}>3 de noviembre</Text>

        <View style={styles.card}>
          <Text style={styles.titulo}>Pago cuenta de te...</Text>
          <Text style={styles.montoPositivo}>$ 1,200.00</Text>
          <Text style={styles.subtext}>Movimiento BBVA</Text>
        </View>

        <Text style={styles.date}>31 de octubre</Text>

        <View style={styles.card}>
          <Text style={styles.titulo}>Gasol la piedad gpo</Text>
          <Text style={styles.montoNegativo}>$ -800.00</Text>
          <Text style={styles.subtext}>Movimiento BBVA</Text>
        </View>

        <Text style={styles.date}>29 de octubre</Text>

        <View style={styles.card}>
          <Text style={styles.titulo}>Pago cuenta de te...</Text>
          <Text style={styles.montoNegativo}>$ -250.00</Text>
          <Text style={styles.subtext}>Movimiento BBVA</Text>
        </View>

        <TouchableOpacity style={styles.btnVer}>
          <Text style={styles.linkVer}>Ver todos</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#0E0E0E" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  back: { 
    fontSize: 26, 
    color: "#fff" 
  },
  menu: { 
    fontSize: 26, 
    color: "#fff" 
  },
  headerTitle: { 
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  body: { 
    flex: 1,
    paddingHorizontal: 20,
  },
  date: { 
    color: "#fff",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1A1A1A",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
  titulo: { 
    color: "#D6D0FF",
    fontSize: 16,
    fontWeight: "600",
  },
  subtext: { 
    color: "#A3A3A3",
    marginTop: 3,
    fontSize: 13,
  },
  montoNegativo: {
    position: "absolute",
    right: 15,
    top: 15,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  montoPositivo: {
    position: "absolute",
    right: 15,
    top: 15,
    color: "#21c471",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnVer: {
    backgroundColor: "#1A1A1A",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  linkVer: { 
    color: "#CFC9FF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
