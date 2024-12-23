import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY, fechitng, URI } from "../../utils/fetchs";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveImages from "../../components/LastFiveImages/LastFiveImages";
import Header from "../../components/Header/Header";
import TodayImages from "../../components/TodayImages/TodayImages";
export default function Home() {
  const [datos, setDatos] = useState<PostImage>({});
  const [lasteFiveImages, setLasteFiveImages] = useState<PostImage[]>([])

  useEffect(() => {
    const fetcheo = async () => {
      try {
        const todayImage = await fechitng();
        setDatos(todayImage);
      } catch (error) {
        console.log(error);
      }
    };

    fetcheo().catch(null);

    const loadLastDaysImages = async() => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse=await fechitng(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
        setLasteFiveImages(lastFiveDaysImagesResponse)
      } catch (error) {
        console.log(error);
      }
    };
    loadLastDaysImages();
  }, []);

  return (
    <View style={style.container}>
      <Header />
      <TodayImages {...datos} />
      <LastFiveImages postImage={lasteFiveImages}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "rgba(18,39,113,255)",
  },
});
