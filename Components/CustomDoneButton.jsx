import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomDoneButton = () => {
  return (
    <Pressable className="bg-black/50 p-2 rounded-md m-2 items-center justify-center">
        <Text className="text-white text-2xl">Done</Text>
    </Pressable>
  )
}

export default CustomDoneButton