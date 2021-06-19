import Carousel, { Pagination } from "react-native-snap-carousel";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCarousel = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Educational",
      img: {
        uri: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
      },
      id: "1",
    },
    {
      name: "Story",
      img: {
        uri: "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_62/how_to_tell_a_story_update_1200x627.jpg?quality=89&w=800",
      },
      id: "2",
    },
    {
      name: "Workout",
      img: {
        uri: "https://cdn2.coachmag.co.uk/sites/coachmag/files/2019/07/upper-body-workout.jpg",
      },
      id: "3",
    },
    {
      name: "Comedy",
      img: {
        uri: "https://m.media-amazon.com/images/G/01/seo/siege-lists/best-comedy-audiobooks-social.jpg",
      },
      id: "4",
    },
    {
      name: "News",
      img: {
        uri: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp",
      },
      id: "5",
    },
  ]);
  return (


    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity activeOpacity = {0.5}>
              <ImageBackground
                source={item.img}
                blurRadius={3}
                style={{
                  width: windowWidth * 0.7,
                  height: 150,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 30 }}
              >
                <Text
                  style={{ fontSize: 50, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayDelay={1000}
        autoplayInterval={2000}
      />

      <Pagination
        dotsLength={data.length}
        dotColor="#202aa8"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="white"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{}}
      />
    </View>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    height:230,
    marginTop:0
  },
});