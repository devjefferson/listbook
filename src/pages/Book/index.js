import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Book =()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua Seu Livro...</Text>
      <TextInput style={styles.inputText} placeholder="Titulo"/>
      <TextInput style={styles.inputText} placeholder="Descrição"/>
      <TouchableOpacity style={styles.buttonInclui}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCamera}>
        <Icon name='camera-alt' size={24} color='#fff'/>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20
  },
  pageTitle:{
    textAlign: 'center',
    fontSize: 18,
    color: 'blue',
    paddingBottom: 5
  },
  inputText:{
    width: 250,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontWeight: 400,
    marginBottom: 20
  },
  buttonInclui:{
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 5,
    width: 120,
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: 5
  },
  buttonCamera:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#000'
  }
})
export default Book;