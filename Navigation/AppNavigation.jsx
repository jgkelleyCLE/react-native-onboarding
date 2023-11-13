import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, OnBoarding } from '../Screens/index'
import { getItem } from '../utils/AsyncStorage'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {

  const [showOnboard, setShowOnboard] = useState(null)

  useEffect(()=> {

    checkIfAlreadyOnBoarded()

  }, [])


    const checkIfAlreadyOnBoarded = async () => {
      let onBoarded = await getItem('onBoarded')

      if(onBoarded==1){
        //hide onboard
        setShowOnboard(false)
      }else {
        //show onboard
        setShowOnboard(true)
      }
    }

    if(showOnboard==null){
      return null
    }

    if(showOnboard){
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Navigator>
        </NavigationContainer>
      )
    }else {
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Navigator>
        </NavigationContainer>
      )
    }

  // return (
  //   <NavigationContainer>
  //       <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }} >
  //           <Stack.Screen name="Home" component={Home} />
  //           <Stack.Screen name="OnBoarding" component={OnBoarding} />
  //       </Stack.Navigator>
  //   </NavigationContainer>
  // )
}

export default AppNavigation