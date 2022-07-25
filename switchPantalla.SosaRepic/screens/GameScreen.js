import {Alert, Button, Dimensions, StyleSheet, Text, View} from "react-native"
import React, { useEffect, useRef, useState } from 'react'

import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"

const GameScreen = props => {

    const { userOption, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState();
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const generateRandomBetween = (min, max, userOption) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max-min) + min)
        if(rndNum === userOption) {
           return generateRandomBetween(min, max, userOption) }
        else {
           return setCurrentGuess( rndNum ) }
    }

   const handlerNextGuess = direction => {

       console.log(currentGuess, props.userOption)    
    if(
        (direction === 'lower' && currentGuess < props.userOption) ||
        (direction === 'greater' && currentGuess > props.userOption)
    ) {
        return Alert.alert('No mientas,', 'tu sabes que no es verdad!', [
            {text: 'Intentar de nuevo', style: 'cancel'}
        ])
    }
    
    if(direction === 'lower')
      currentHigh.current = currentGuess
     else
      currentLow.current = currentGuess
      
      const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
      //setCurrentGuess(nextNumber)
      setRounds(current => current + 1)
   } 

   useEffect(() => {
      generateRandomBetween(1, 100, props.userOption)
    }, [])

    useEffect(() => {
        if (currentGuess == userOption) onGameOver(rounds)
    }, [currentGuess, userOption, onGameOver])

    return(
        <View style={style.screen}>
        <Text>La suposicion del oponente</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={style.buttonContainer}>
            <Button title='Menor' onPress={handlerNextGuess.bind(this, 'lower')}></Button>
            <Button title='Mayor' onPress={handlerNextGuess.bind(this, 'greater')}></Button>
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
        marginTop: Dimensions.get('window').height > 600 ? 10 : 10,
        width: 300,
        maxWidth: '80%' 
    }
})

export default GameScreen