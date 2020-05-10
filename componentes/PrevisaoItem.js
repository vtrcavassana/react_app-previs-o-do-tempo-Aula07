import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
    return (
        <Cartao estilos = {estilos.cartao}>
            <View style = {estilos.tela}>
                <Image
                    style = {estilos.imagem}
                    source = {{uri: "https://openweathermap.org/img/wn/" + props.previsao.item.weather[0].icon + ".png"}}/>
                <View>
                    <View style = {estilos.primeiraLinha}>
                        <Text>{new Date(props.previsao.item.dt * 1000).toLocaleTimeString()} - {props.previsao.item.weather[0].description}</Text>
                    </View>
                    <View style = {estilos.segundaLinha}>
                        <Text style = {estilos.valor}>NdS: {new Date(props.cidadedata.sunrise * 1000).toLocaleTimeString()}</Text>
                        <Text style = {estilos.valor}>PdS: {new Date(props.cidadedata.sunset * 1000).toLocaleTimeString()}</Text>
                        <Text style = {estilos.valor}>Sens Ter: {props.previsao.item.main.feels_like + "\u00B0"}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    );
}

const estilos = StyleSheet.create({
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    valor: {
        marginHorizontal: 2
    },
    imagem: {
        width: 50,
        height: 50
    },
    tela: {
        flexDirection: 'row'
    },
    cartao: {
        marginBottom: 5
    }
});

export default PrevisaoItem;