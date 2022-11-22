import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { excluirContato } from '../../services/ContatoService';
import lapis from '../../assets/lapis.png'


export default function AlterarContato({ contato }) {
  const navigation = useNavigation();
  return (
        <TouchableOpacity onPress={() => {
            AlterarContato({ id: contato.id });
            navigation.navigate('Listagem');
        } }>
          <Image source={ lapis } style={estilos.lapis} />
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
