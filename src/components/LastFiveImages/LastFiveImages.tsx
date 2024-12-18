import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PostImage as typePostImage} from "../../types";
import { FC } from "react";
import { PostImages } from "../PostImage/PostImages";

const LastFiveImages: FC<typePostImage[]> = ({postImage}) => {

    
  return (
    <View style={style.container}>
      <Text style={style.title}>Ultimos 5 Dias</Text>
      <ScrollView style={style.contenedor}> 
        {
            postImage?.map((post:typePostImage,i:any)=>(
                    <PostImages {...post}  key={i}/>
            ))
        }
      </ScrollView>
    </View>
  );
};

export default LastFiveImages;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
  contenedor: {},
});
