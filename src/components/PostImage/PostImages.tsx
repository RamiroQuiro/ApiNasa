import React, { FC } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { PostImage, PostImageNavigationProps } from "../../types";
import { useNavigation } from "@react-navigation/native";

export const PostImages: FC<PostImage> = ({ title, date ,explanation,url}) => {
const { navigate}=useNavigation<PostImageNavigationProps>();
console.log('este es el url del postImages',url)
  const handleViewPress=()=>{
    navigate('Detail',{title,url ,date,explanation})
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.date}>{date}</Text>
      <View style={style.buttonContainer}>
        <Button title="view" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
    gap:10
  },
  title: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  buttonContainer:{
    alignItems:'flex-end',
    backgroundColor:'transparent'
  },
  date: {
    color:'white',
    
  },
});
