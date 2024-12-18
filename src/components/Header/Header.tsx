import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import nasaLogo from "../../../assets/nasaLogo.png";

const staticInfo = {
  name: "Ramiro Quiroga",
  uri: "https://images.pexels.com/photos/29715958/pexels-photo-29715958/free-photo-of-mujer-tomando-fotos-en-una-playa-junto-al-mar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function Header() {
  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Text style={style.title}>Explore</Text>
      </View>
      <View style={style.rightContainer}>
        <Image style={style.images} source={nasaLogo} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  rightContainer: {
    alignItems: "flex-end",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  images: {
    width: 60,
    height: 60,
  },
});
