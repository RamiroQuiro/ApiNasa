import { ScrollView, StyleSheet, Text, View } from 'react-native'

import React, { FC } from 'react'
import { PostImage } from '../../types'

const LastFiveImages: FC<PostImage[]> = (postImage) => {

  return (
    <View style={style.container}>
      <Text style={style.title}>
        hola
      </Text>
      <ScrollView style={style.contenedor}>

      </ScrollView>
    </View>
  )
}

export default LastFiveImages


const style=StyleSheet.create({
  container:{
flex:1,
marginVertical:8,

backgroundColor:'green'
  },
  title:{
    color:'#fff',
    fontSize:16,
    marginBottom:18
  },
  contenedor:{}
})
