import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/AsyncStorage';

const Home = () => {
  const navigation = useNavigation()

  const handleReset = async() => {
    await removeItem('onBoarded')
    navigation.navigate("OnBoarding")
  }

  return (
    <View className="flex-1 items-center justify-center">
        <View className="w-full h-[400px] items-center">
              <LottieView className="w-full h-full" source={require('../assets/confetti.json')} autoPlay />
          </View>
    <TouchableOpacity className="bg-blue-600 p-2 w-1/2 rounded-md items-center" onPress={handleReset}>
        <Text className="text-white text-2xl">Reset</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home