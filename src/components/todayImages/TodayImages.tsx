import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { PostImage, PostImageNavigationProps } from "../../types/index";
import { useNavigation } from "@react-navigation/native";

export default function TodayImages({ date, title, url ,explanation}: PostImage) {
  const {navigate}=useNavigation<PostImageNavigationProps>()


  const handleViewPress=()=>{
    navigate('Detail',{url,date,title,explanation})
  }
  
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={{ uri: url }} style={style.image} />
      </View>
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.text}>{date}</Text>
      </View>
      <View>
        <Button title="View more" onPress={handleViewPress}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#2c449d",
    padding: 15,
    borderRadius: 30,
    marginVertical: 20,
  },
  imageContainer: {
    padding: 5,
    borderRadius: 32,
    width: 300,
    height: 200,
  },
  image: {
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    height: 190,
    borderRadius: 30,
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "semibold",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
