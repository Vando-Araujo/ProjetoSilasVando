import React from 'react';
import { StyleSheet, Text, View, StatusBar,Image,TextInput, Button } from 'react-native';


export default function TelaBoasVindas({ navigation }) {
  return (
    <View style={estilos.container}>

<Image style={{width:425,height:300}} source={require('../../assets/projeto.png')} />

<Text style={estilos.mensagem}>Sejam Bem Vindos  </Text>
      <Text style={estilos.mensagem}>Venha conhecer o projeto realizado por </Text>
      <Text style={estilos.mensagem}>Silas e Vando</Text>
      <Button
        onPress={() => {
            navigation.navigate('Listagem');
        }}
        title="Vamos Entrar "
        color="#9370DB"
        accessibilityLabel="Entrar para valer na aplicação"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5fb4e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  mensagem: {
    fontSize: 30,
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  }
});
