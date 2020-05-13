import React from 'react';
import { View, Text,TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';

const Main = () => {

  const Data = [
    {
      id: "1",
      title: 'Harry Potter e a pedra filosofal',
      anotations: 'O livro e Muito Bom',
      read: true,
      photo: null
    },
    {
      id: "2",
      title: 'Harry Potter e a Camara Secreta',
      anotations: 'O livro e Muito Bom',
      read: false,
      photo: null
    },
    {
      id: "3",
      title: 'Harry Potter e a Calice de fogo',
      anotations: 'O livro e Muito Bom',
      read: false,
      photo: null
    }
  ]
  return (
  <View style={styles.container}>
    <View style={styles.toolbox}>
      <Text style={styles.title}>Lista de Leituras</Text>
      <TouchableOpacity style={styles.toolboxButton}>
        <Icon name="add" size={16} color='#fff' />
      </TouchableOpacity>
    </View>
    <FlatList 
    data={Data}
    keyExtractor={item=> item.id}
    renderItem={({item})=> (
    <TouchableOpacity style={styles.itemButton}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
    )}
    
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20
  },
  title:{
    color: 'blue',
    fontSize: 18,
    flex: 1
  },
  toolboxButton:{
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

  },
  toolbox:{
    flexDirection: 'row'
  },
  itemButton:{

  },
  itemText:{
    fontSize: 18
  }
})
export default Main;