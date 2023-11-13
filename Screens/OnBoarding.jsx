import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS } from '../Colors'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import CustomDoneButton from '../Components/CustomDoneButton';
import { setItem } from '../utils/AsyncStorage';

const { width, height } = Dimensions.get('window')

const OnBoarding = () => {

  const navigation = useNavigation()

  const handleDone = () => {
    setItem('onBoarded', '1')
    navigation.navigate("Home")
  }

  return (
    <View className="flex-1">
      
      <Onboarding
      // DoneButtonComponent={CustomDoneButton}
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        pages={[
        {
          backgroundColor: COLORS.indigo200,
          image: (
            <View className="w-[100%] h-[400px] items-center">
                <LottieView className="w-full h-full" source={require('../assets/productivity.json')} autoPlay loop />
            </View>
          ),
          title: 'Boost Productivity',
          subtitle: '',
        },
        {
          backgroundColor: COLORS.amber200,
          image: (
            <View className="w-full h-[400px] items-center">
              <LottieView className="w-full h-full" source={require('../assets/workSeamlessly.json')} autoPlay loop />
            </View>
          ),
          title: 'Work Seamlessly',
          subtitle: '',
        },
        {
          backgroundColor: COLORS.green200,
          image: (
            <View className="w-full h-[400px] items-center">
              <LottieView className="w-full h-full" source={require('../assets/goals.json')} autoPlay loop />
            </View>
          ),
          title: 'Achieve Higher Goals',
          subtitle: '',
        },
        ]}
      />

      
    </View>
  )
}

export default OnBoarding