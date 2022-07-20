import { StyleSheet, View, } from "react-native";

import React from "react";

const Card = props => (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>    
)

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'grey'  
    },
})

export default Card