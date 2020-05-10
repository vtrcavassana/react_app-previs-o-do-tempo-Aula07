import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Keyboard } from 'react-native';
import PrevisaoItem from './componentes/PrevisaoItem';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&cnt=5&q=";
  const apiKey = "d60bfb3ab6ba21d51404b86eb00cb592";

  const [cidade, setCidade] = useState ('');
  const [previsoes, setPrevisoes] = useState ([]);
  const [cidadeData, setCidadeData] = useState([]);

  const obterPrevisoes = () => {
    setPrevisoes ([]);
    setCidadeData([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target).then((dados) => dados.json()).then((dados) => {
      setPrevisoes(dados["list"]);
      setCidadeData(dados["city"]);
      });
    Keyboard.dismiss();
  }

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }


  return (
    <View style={styles.container}>
      <View style = {styles.entrada}>
        <TextInput
          style = {styles.nomeCidade}
          placeholder = "Digite o nome da Cidade"
          value = {cidade}
          onChangeText = {capturarCidade}/>
        <Button
          title = "Ok"
          onPress = {obterPrevisoes} />
      </View>
      <FlatList
        data = {previsoes}
        renderItem = {(previsao) => (<PrevisaoItem previsao = {previsao} cidadedata = {cidadeData}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nomeCidade: {
    padding: 11,
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  container: {
    marginTop: 15,
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
