import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { API_KEY, fechitng, URI } from "../../utils/fetchs";
import TodayImages from "../../components/TodayImages/TodayImages";
import { PostImage } from "../../types";
import { format } from "date-fns";
export default function Home() {
  const [datos, setDatos] = useState<PostImage>({});

  useEffect(() => {
    const fetcheo = async () => {
      try {
        const todayImage = await fechitng(URI, API_KEY);
        setDatos(todayImage);
      } catch (error) {
        console.log(error);
      }
    };

    fetcheo().catch(null);

    const loadLastDaysImages=()=>{
      try {
        const date=new Date();
        const todaysDate=format(date,'yyyy-MM-dd')
      } catch (error) {
        console.log(error)
      }
    }

  }, []);


  console.log(datos)
  return (
    <View style={style.container}>
      <Header />
      <TodayImages {...datos}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
