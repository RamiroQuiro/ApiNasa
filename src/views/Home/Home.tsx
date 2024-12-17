import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { API_KEY, fechitng, URI } from "../../utils/fetchs";
export default function Home() {
  const [datos, setDatos] = useState(String);

  useEffect(() => {
    const fetcheo = async () => {
      try {
        const todayImage = await fechitng(URI, API_KEY);
        setDatos(todayImage.hdurl);
      } catch (error) {
        console.log(error);
      }
    };

    fetcheo().catch(null);
  }, []);


  console.log(datos)
  return (
    <View style={style.container}>
      <Header />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
