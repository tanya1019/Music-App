import Carousel, { Pagination } from "react-native-snap-carousel";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCarousel = ({navigation}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Rock",
      img: {
        uri: "https://i.pinimg.com/originals/af/f7/f3/aff7f37a5fa8de4b2dda6ecaa175ed63.jpg",
      },
      id: "1",
      list:[
                {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
      ]
    },
    {
      name: "HipHop",
      img: {
        uri: "https://wallpapercave.com/wp/wp2971096.jpg",
      },
      id: "2",
       list:[
                {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
      ]
    },
    {
      name: "Jazz",
      img: {
        uri: "https://images.ctfassets.net/3s5io6mnxfqz/3S86GwueAnwu343exOPidz/e51529f0dea57ef5ebed56b3cab86b75/john-coltrane-music-guide.jpeg",
      },
      id: "3",
       list:[
                {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
      ]
    },
    {
      name: "Classical",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucskHt1xghcl0vXiAGjhkz_tL27pFbmBYgQ&usqp=CAU",
      },
      id: "4",
       list:[
                {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
      ]
    },
    {
      name: "Metal",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRsLwD6FmnXNTmOJ80bjhBD4VPG8FjpPYfg&usqp=CAU",
      },
      id: "5",
      list:[
                {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
      ]
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
              <TouchableOpacity activeOpacity = {0.5} onPress = {() => navigation.navigate('MusicCatogList', {item})}>
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
        inactiveDotColor="#e92b81"
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
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    height:230
  },
});