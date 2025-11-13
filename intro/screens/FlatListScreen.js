import{ Text, View, FlatList, StyleSheet} from 'react-native'
import { useState } from 'react'

class Producto {
    constructor(id, titulo, description,precio){
    this.id=id;
    this.titulo=titulo;
    this.description=description;
    this.precio=precio;
    }
}

export const producto2= [

    new Producto('1', 'Audiculares', 'Experimenta algo sensacional', 99),
    new Producto('2', 'Audiculares', 'Experimenta algo sensacional', 99),
    new Producto('3', 'Audiculares', 'Experimenta algo sensacional', 99),
    new Producto('4', 'Audiculares', 'Experimenta algo sensacional', 99),
];

const FlatListScreen = ()=>{
    const [productList, setProductoLista]= useState(producto2);

return (
    <View style={styles.lista}>

        <FlatList
        data={productList}
        keyExtractor={(item) =>item.id}
        renderItem={({item}) => (
            <View style={styles.item}>
                <Text>{item.titulo}</Text>
                <Text>{item.description}</Text>
                <Text>{item.precio}</Text>
                <Text>Ver Detalles</Text>
            </View>

        )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
    },
    item: {
      padding: 15,
      marginVertical: 8, 
      marginHorizontal: 16,
      backgroundColor: '#f0f0f0', 
    },
});
export default FlatListScreen