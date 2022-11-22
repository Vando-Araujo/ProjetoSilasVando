import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

import ExcluirContato from '../../componentes/ExcluirContato';


export default function TelaVisualizacao({ route, navigation }) {
    const { id, nome, nomeCompleto, telefone, email } = route.params;
    const contato = { id, nome, nomeCompleto, telefone, email };
    return (
        <SafeAreaView style={estilos.painelPrincipal}>
            <Text style={estilos.titulo}>{ nome }</Text>
            <Text style={estilos.rotulo}>Nome do Projeto:</Text>
            <Text style={estilos.campo}>{ nomeCompleto }</Text>
            <Text style={estilos.rotulo}>Valor do Orçamento:</Text>
            <Text style={estilos.campo}>{ telefone }</Text>
            <Text style={estilos.rotulo}>Ação do Projeto</Text>
            <Text style={estilos.campo}>{ email }</Text>
            <View style={estilos.painelBotoes}>
                <Button
                    onPress={() => {
                        navigation.goBack();
                    }}
                    title="Voltar"
                    color="#841584"
                    style={estilos.botao}
                />
                <ExcluirContato contato={contato} />
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    painelPrincipal: {
        paddingHorizontal: 10,
    },
    titulo: {
        fontSize: 32,
    },
    rotulo: {
        color: 'grey',
        paddingTop: 10,
    },
    campo: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
});
