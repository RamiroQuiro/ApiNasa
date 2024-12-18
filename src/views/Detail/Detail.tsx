import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Detail: FC<PostImage> = () => {
  const {
    params: { date, explanation, url, title },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  console.log('este es el url del datails ->',url)
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.date}>{date}</Text>
      <View style={style.containerImage}>
        <Image source={{ uri: url }} style={style.image} />
      </View>
      <View style={style.containerText}>
        <Text style={style.text}>{explanation}</Text>
      </View>
    </View>
  );
};

export default Detail;

const style = StyleSheet.create({
  container: {
    paddingHorizontal:16,
    flex: 1,
    backgroundColor: "rgba(18,39,113,255)",
  },
  title: {
    marginVertical:25,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color:"#fff",
    marginBottom:10,
    fontSize: 14,
    fontWeight: "semibold",
  },
  containerImage: {},
  image: {
    width:"100%",
    height:200,
    objectFit:'cover',

  },
  containerText: {
    backgroundColor:"#FFFFFF20",
    color:"#fff",
    padding:15,
    marginVertical:15,
  },
  text: {
    color:"#FFF"
  },
});
