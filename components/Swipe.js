import { 
  StatusBar,
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,} from 'react-native'
import * as React from 'react'
import { getMovies } from '../Api'
import OpenMovie from '../navigation/screens/OpenMovie'
import { useNavigation } from '@react-navigation/native';
import Moment from 'moment';

import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;


const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute', opacity:0.3 }}>
      

      <FlatList
        data={movies.reverse()}
        keyExtractor={(item, index) => index.toString() + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',

              }}
            >
              <Image
                  blurRadius={10}
                
                source={{ uri: item.backdrop }}
                style={{

                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                  
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', '#1A1A1D', '#1A1A1D']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>

  );
};

export default function swipe( ) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies([{ id: 'emptyL' }, ...movies, { id: 'emptyR' }]);

    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);


  const scrollX = React.useRef(new Animated.Value(0)).current;



  const navigation = useNavigation(); 






  return (
    <View>
      <Backdrop movies={movies} scrollX={scrollX} />
      <StatusBar hidden />

      <Animated.FlatList

        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'

        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],{ useNativeDriver: false })}
        onScrollToIndexFailed={(item)=> setTitle(item.title)}
        scrollEventThrottle={1}
        renderItem={({ item, index }) => {
          if (!item.image) {

            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }



          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
        
          const translateY = scrollX.interpolate({

            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',

          });

          return (
            
            <View style={{ width: ITEM_SIZE, height:height-100 }}>
            
              <Animated.View

                style={{
                  marginHorizontal: SPACING,
                  alignItems: 'center',
                  transform: [{ translateY }],
                  color:'#fff'

                }}
              >
              <TouchableOpacity style={{alignItems:'center',}}
                  onPress={() => navigation.navigate('OpenMovie', {item:item,  fromScreen:'Home'})}>
              <View style={{ alignItems:'center',  backgroundColor:"#1A1A1D", padding:12, borderRadius:30}}>
                <View
                
                 >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  </View>
                <View style={{ marginTop:10, backgroundColor:'orange',  borderRadius:50, width:85, height:25,  justifyContent:'center', alignItems:'center'}} >
                  <Text style={{color:'#1A1A1D'}}> IMDB {item.rating}</Text>
                </View>
              </View>
              <Text style={{color:'#FFFFFF80',paddingTop:30, fontSize:12}}>{Moment(item.releaseDate).format('d MMM yy')}</Text>

              <Text numberOfLines={2} style={{color:'#FFFFFF', fontWeight:'bold',paddingTop:10, fontSize:20, textAlign:'center'}}>{item.title}</Text>
              
              </TouchableOpacity>
              </Animated.View>

            </View>
          );
        }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  // image:{
  //   borderRadius:20,
  //   width:width-160,
  //   height:height-390
  // }
  image: {
    width: width-160,
    height: ITEM_SIZE * 1.1,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
})