import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { excluirContato } from '../../services/ContatoService';
import lixeira from '../../assets/lixeira.png';
import lapis from '../../assets/lapis.png'


export default function ExcluirContato({ contato }) {
  const navigation = useNavigation();
  return (
        <TouchableOpacity onPress={() => {
            excluirContato({ id: contato.id });
            navigation.navigate('Listagem');
        } }>
          <Image source={ lixeira } style={estilos.lixeira} />          
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
  lixeira: {
    margin: 6,
    width: 20,
    height: 20,
  },
  lapis:{
    margin: 6,
    width: 20,
    height: 20,
  },
});
