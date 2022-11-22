import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput,
    Button, View, Alert } from 'react-native';
import { inserirContato } from '../../services/ContatoService';


export default function TelaCadastro({ navigation }) {
    const [nome, onChangeNome] = useState("");
    const [nomeCompleto, onChangeNomeCompleto] = useState(null);
    const [telefone, onChangeTelefone] = useState(null);
    const [email, onChangeEmail] = useState(null);
    const [referencia, onChangeReferencia] = useState(null);

    return (
        <SafeAreaView style={estilos.painel}>
            <Text style={estilos.titulo}>Novo Projetos</Text>

            <Text>Nome do Projeto</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeNome}
                placeholder="Informe o Nome do Projeto"
                value={nome}
            />

            <Text>Descrição do Projeto</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeNomeCompleto}
                placeholder="Informe a Descrição do Projeto"
                value={nomeCompleto}
            />

            <Text>Valor do Projeto</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeTelefone}
                value={telefone}
                placeholder="Informe o Valor do Projeto"
                keyboardType="number-pad"
            />

            <Text>Ação</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Informe a Ação do Projeto"
            />
            <Text>Referencia</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeReferencia}
                value={referencia}
                placeholder="Informe a Referencia do Projeto"
            />

            <View style={estilos.painelBotoes}>
                
                <Button
                        onPress={() => {
                            navigation.goBack();
                        }}
                        title="Voltar"
                    />
                <Button
                    onPress={() => {
                        const novoContato = {
                            nome: nome,
                            nomeCompleto: nomeCompleto,
                            telefone: telefone,
                            email: email,
                            referencia: referencia,

                        };
                        if (nome.length === 0) {
                            Alert.alert("Erro", "O nome do contato é uma informação obrigatória!");
                            return;
                        }
                        inserirContato({ novoContato });
                        navigation.navigate('Listagem');
                    }}
                    title="Salvar"
                    color="#841584"
                />

                
            </View>

        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    painel: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 22,
        marginTop: 6,
        marginBottom: 10,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
});
