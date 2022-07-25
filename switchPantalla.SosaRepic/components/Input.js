import { StyleSheet, TextInput } from "react-native";

import React from "react";

const Input = props => { 
    
    <TextInput style={{...styles.input, ...props.style}}>  
      {props.children}
    </TextInput> 
    
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input