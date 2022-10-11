import { StyleSheet, Text,ScrollView, TouchableOpacity,Image, View, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import SVGProfileIcon from "../../assets/profileIcon";
import SVGSerachIcon from "../../assets/searchIcon";

import SVGVoiceIcon from "../../assets/voiceIcon";

import Cards from '../../components/Cards'

import { categoryMovieData } from '../../Api';


const CategoryData = [
    {
      id:0,
      title:'Suggested',
    },
    {
      id:12,
      title:'Adventure',
    },
    {
      id:14,
      title:'Fantasy',
    },
    {
      id:16,
      title:'Animation',
    },
    {
      id:18,
      title:'Drama',
    },
    {
      id:27,
      title:'Horror',
    },
    {
      id:28,
      title:'Action',
    },
    {
      id:35,
      title:'Comedy',
    },
    {
      id:36,
      title:'History',
    },
    {
      id:37,
      title:'Western',
    },
    {
      id:53,
      title:'Thriller',
    },
    {
      id:80,
      title:'Crime',
    },
    {
      id:99,
      title:'Documentary',
    },
    {
      id:878,
      title:'Science Fiction',
    },
    {
      id:9648,
      title:'Mystery',
    },
    {
      id:10402,
      title:'Music',
    },
    {
      id:10749,
      title:'Romance',
    },
    {
      id:10751,
      title:'Family',
    },
    {
      id:10752,
      title:'War',
    },
    {
      id:10770,
      title:'TV Movie',
    },

    
  ]


export default function DiscoverScreen() {
    
  const [category, setCategory] = useState(0)
  const [getMovies, setMovies] = React.useState([]);



    const fetchData = async (category) => {
      const movies = await categoryMovieData(category);
      setMovies(movies);
      // console.log(movies)

    };

    if (getMovies.length === 0) {
      fetchData(getMovies);
      // console.log(getMovies)

    }


  
  


  const Item = ({ item, onPress, backgroundColor}) => (
    
    <TouchableOpacity onPress={onPress} style={[styles.categoryLinear,{ backgroundColor: backgroundColor,  marginTop:25, marginRight:10 }]}>
         <Text style={{ color:'#fff' }}>{item.title}</Text>
    </TouchableOpacity>

  );
  
  const renderItem = ({ item }) => {
    let bgColor = '#25252950'
    if(item.id == category){
      bgColor = '#D94343'
    }
      return (
        <Item
          item={item}
          onPress={()=>{setCategory(item.id)  
            fetchData(item.id)
          }}
          backgroundColor={bgColor}
        />
      );
  };

  const CardItem = ({ item })=>{

    return(
      <Cards TouchableOpacity={ ()=> navigation.navigate('Ticket')}  item={item} />
    )


  }
// console.log(movies)
// 

  return (
    <SafeAreaView style={styles.mainConatiner}>
    <View>
      <View  style={{padding:25, paddingBottom:0}}>
      
      <Text style={styles.header}> DISCOVER </Text>
          <View style={[styles.linearInput,{backgroundColor:'#252529'}]} >
              <SVGSerachIcon style={styles.searchIcon}/>
              <TextInput style={styles.input} placeholder='Search Movie...' placeholderTextColor="#FFFFFF50" />
              <View style={{ width:1,height:20, backgroundColor:'#C4C4C4',  marginLeft:0}}></View>
              <SVGVoiceIcon/>
          </View>
      </View>
      <View>

        <FlatList
            horizontal
            data={CategoryData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{paddingLeft:25, marginBottom:25}}
            showsHorizontalScrollIndicator={false}/>
      </View>


      <View>
        <FlatList
          horizontal
          renderItem={CardItem}
          data={getMovies}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainConatiner:{
      flex:1,
      backgroundColor:'#1A1A1D'
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 12,
    },
    categoryLinear:{
      padding:36,
      paddingBottom:25,
      paddingTop:25,
      borderRadius:25
  
    },
    input:{
      color:'#fff',
      height:50,
      flex:1
    },
    linearInput:{
      height:50,
      borderRadius:15,
      flexDirection:'row',
      alignItems:'center',
      marginTop:30
  
    },
    header:{
      fontWeight:'bold',
      fontSize:23,
      color:'#fff'
    }
})