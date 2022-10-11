import { StyleSheet,Dimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
import SVGHeartActiveIcon from '../assets/heartActive';
import SVGHeartDeactiveIcon from '../assets/heartDeactive';

export default function Cards({ item }) {
  const navigation = useNavigation(); 



  return (
    <TouchableOpacity onPress={() => navigation.navigate('OpenMovie', {item:item, fromScreen:'Discover'})}>
      <View style={styles.card}>

 
        <Image style={{ height:height-425, width:width - 205, borderRadius:18  }} source={{ uri: item.image }}/>
        <View style={styles.rating} >
          <Text style={{color:'#1A1A1D'}}> IMDB {item.rating}</Text>
        </View>
        <View width={width - 210} style={styles.cardText}>
          <Text numberOfLines={1} style={styles.title}> {item.title} </Text>

        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#252529',
    width:width - 175,
    height:height-345,
    borderRadius:20,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:15
  },
  title:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    marginBottom:10,
    marginTop:20
  },
  description:{
    color:'#fff',
    fontSize:12,
    width:width - 115,
  },
  cardText:{
    flexDirection:"row"
  },
  rating:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    
    elevation: 19,

    position:'absolute',
    marginTop:10, 
    backgroundColor:'orange',  
    borderRadius:50, 
    width:85, 
    height:25,  
    justifyContent:'center', 
    alignItems:'center', 
    top:0, 
    borderColor:'#252529', 
  }
})