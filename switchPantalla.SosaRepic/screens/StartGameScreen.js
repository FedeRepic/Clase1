import {
  Button,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native"
import React, { useState } from "react"

import Card from "../components/Card"
import Colors from "../constants/colors"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"

const StartGameScreen = props => {

 const [enteredValue, setEnteredValue] = useState('')
 const [confirmed, setConfirmed] = useState(false)
 const [selectedNumber, setSelectedNumber] = useState('') 

 const handlerInputNumber = (text) => {
  setEnteredValue(text.replace(/[^0-9]/g), '')
  console.log('handlerInput', enteredValue)
 }

const handlerResetInput = () => {
  console.log(enteredValue)
  setEnteredValue('')
  setConfirmed(false)
  console.log('handlerReset', enteredValue)
}

const handlerConfirmInput = () => {
  const choseNumber = parseInt(enteredValue)
  if(choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return

  setConfirmed(true)
  setSelectedNumber(parseInt(enteredValue))
  setEnteredValue('')
  console.log('handlerConfirm')
}

let confirmedOutput
if (confirmed) {
 confirmedOutput = (
  <Card style={styles.inputContainer}>
    <Text>Tu Selección</Text>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title="Empezar Juego" onPress={() => props.onStartGame(selectedNumber)}></Button>
  </Card>
 )  
}


  return (

  <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
  }}>  

  <View style={styles.screen}>
    <Text style={styles.title}>Comenzar</Text>
    <Card style={styles.inputContainer}>
        <Text>Elija Número</Text>
        <TextInput style={styles.input}
        //blurOnSubmit
        autoCapitalization='none'
        autoCorrect={false}
        keyboardType='numeric'
        maxLenght={2}
        placeholder={"Valor"}
        onChangeText={handlerInputNumber}
        value={enteredValue} 
        >
        </TextInput>  
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Limpiar" 
                    onPress={handlerResetInput} 
                    color= {Colors.accent}/>
          </View>  
          <View style={styles.button}>
            <Button title="Confirmar" 
                    onPress={handlerConfirmInput} 
                    color= {Colors.primary}/>    
          </View>          
        </View>
    </Card>

    {confirmedOutput}

  </View> 

  </TouchableWithoutFeedback>

  )    
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginVertical: 10,
      fontFamily: 'PoppinsRegular'
    },  
    inputContainer: {
      width: '80%',
      minWidth: 300,
      maxWidth: '95%',
      padding: 20,
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: Dimensions.get('window').width / 4
    },
    input: {
      height: 30,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginVertical: 10,
  }
})

export default StartGameScreen