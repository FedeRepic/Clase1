import { Image, Platform } from 'react-native'

import {BreadDetailScreen} from '../screens/BreadDetailScreen'
import { COLORS } from '../constants/colors'
import {CategoriesScreens} from '../screens/CategoriesScreens'
import {CategoryBreadScreen} from '../screens/CategoryBreadScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' component={CategoriesScreens}/>
                <Stack.Screen name='Products' component={CategoryBreadScreen} options={({route}) => ({ title: route.params.name})}/>
                <Stack.Screen name='Detail' component={BreadDetailScreen} options={({route}) => ({title: route.params.bread.name})}/>
            </Stack.Navigator>   
    )
}
export default ShopNavigator;