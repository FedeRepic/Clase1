import {Button, StyleSheet, Text, View} from "react-native"
import React, { useState } from 'react'

import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"

const GameScreen = props => {

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max-min) + min)
        if(rndNum === exclude)
          return generateRandomBetween(min, max, exclude)
        else
          return rndNum  
    }

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.selectedNumber))

    return(
        <View style={style.screen}>
        <Text>La suposicion del oponente</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={style.buttonContainer}>
            <Button title='Menor' onPress={() => {}}></Button>
            <Button title='Mayor' onPress={() => {}}></Button>
        </Card>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%' 
    }
})

export default GameScreen