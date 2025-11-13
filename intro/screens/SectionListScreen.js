import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

const houses = [
    {
        title: 'DC Comics',
        data: [
            'Superman',
            'Superman',
            'Superman',
        ],
    },
    {
     title: 'Marvel Comics',
        data: [
            'Superman',
            'Superman',
            'Superman',
        ],   
    },
];

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
      sections={houses}
      keyExtractor={(item)=> item}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <Text style={styles.SectionHeader}>{section.title}</Text>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    item: {
      fontWeight: 'bold',
      paddingHorizontal: 10, 
      paddingVertical: 8,
      backgroundColor: '#f0f0f0', 
    },
      SectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: '#ddd',
      padding: 5,
},

});

export default SectionListScreen