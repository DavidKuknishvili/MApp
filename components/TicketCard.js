import { StyleSheet,Dimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');


export default function TicketCard({ item }) {
  const navigation = useNavigation(); 


  return (
    <TouchableOpacity onPress={() => navigation.navigate('OpenMovie', {item:item, fromScreen:'Ticket'})}>
      <View style={styles.card}>

    
        <Image style={{ height:height-480, width:width - 255, borderRadius:18  }} source={{ uri: item.image }}/>
        {/* <View style={styles.rating} >
          <Text style={{color:'#1A1A1D'}}> IMDB {item.rating}</Text>
        </View> */}
        <View width={width-170} height={height-480} style={styles.cardText}>
          <Text numberOfLines={2} style={styles.title}> {item.title} </Text>
          <Text numberOfLines={7} style={{color:'#ffffff80'}}> {item.description} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#252529',
    width:width - 15,
    height:height-450,
    borderRadius:30,
    justifyContent: 'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    marginBottom:15

  },
  title:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    marginBottom:10,
    marginTop:20,
  },
  description:{
    color:'#fff',
    fontSize:12,
    width:width - 115,
  },
  cardText:{
    flexDirection:"colimn",
    marginStart:10,
    display:'flex',
    
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
  },
})