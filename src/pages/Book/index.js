import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Book =()=>{
  return(    
      <View style={styles.container}>
        <Text style={styles.pageTitle} >Inclua Seu Livro...</Text>
        <TextInput style={styles.inputText} placeholder="Titulo"/>
        <TextInput style={styles.inputText} numberOfLines={4} multiline={true} placeholder="Descrição"/>
        <TouchableOpacity style={styles.buttonCamera}>
          <Icon name='camera-alt' size={24} color='#fff'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInclui}>
          <Text style={styles.textButtonInclui}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textButtonCancel}>Cancelar</Text>
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
    color: '#f39c12',
    paddingBottom: 5
  },
  inputText:{
    width: 250,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f39c12",
    fontWeight: 400,
    marginBottom: 20
  },
  buttonCamera:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#f39c12'
  },
  buttonInclui:{
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 5,
    width: 120,
    textAlign: 'center',
    backgroundColor: '#f39c12',
    borderRadius: 5
  },
  textButtonInclui:{
    color: '#fff',
    fontSize: 16
  },
  textButtonCancel:{
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  }
})
export default Book;